import { Request, Response } from "express";
import { GenerateOTPRequest } from "../model/request/generateotp_request";
import { FailedResponse } from "../response/failed_response";
import { Crypto } from "../util/crypto";
import db from '../database/database'
import { VerifyTokenModel, VerifyTokenQuery } from "../database/query/verifytoken_query";
import { OTPQuery } from "../database/query/otp_query";
import { GenerateOTPResponse } from "../model/response/generate_response";
import { SuccessResponse } from "../response/success_response";
import { VerifyOTPRequest } from "../model/request/verifyotp_request";
import { JwtUtil } from "../util/jwt_util";
const twofactor = require("node-2fa");

export class OTPController {
    static generate(req: Request, res: Response) {
        const otp = new GenerateOTPRequest()
        const random = Crypto.randomHex(24)
        const vtokenq = new VerifyTokenQuery()
        const vtoken = new VerifyTokenModel()
        const otpq = new OTPQuery()
        const data = new GenerateOTPResponse()

        otp.setVerifyToken(req.params["vtoken"])

        if (otp.validate(otp) == false) return FailedResponse.bodyFailed(res, "")

        db.query(vtokenq.getByVtoken(otp.getVerifyToken()), (error, result) => {
            if (error) return FailedResponse.queryFailed(res, "")
            if (result[0] == null) return FailedResponse.queryFailed(res, "")


            if (result[0].secret_key == null || result[0].secret_key == "") {
                const newSecret = twofactor.generateSecret({ name: "Starter", account: "root" });
                db.query(otpq.createSecret(newSecret.secret), (error2, result2) => {
                    if (error2) return FailedResponse.queryFailed(res, "")
                    if (result2.affectedRows == 0) return FailedResponse.queryFailed(res, "")

                    vtoken.setVerifyToken(random)
                    vtoken.setUserId(result[0].id)

                    db.query(vtokenq.create(vtoken), (error3, result3) => {
                        if (error3) return FailedResponse.queryFailed(res, "")
                        if (result3.affectedRows == 0) return FailedResponse.queryFailed(res, "")

                        data.setSecretKey(newSecret.secret)
                        data.setVerifyToken(random)

                        SuccessResponse.generateOTPResponse(res, '', data)
                    })
                })
            }
            else {
                data.setSecretKey(result[0].secret_key)
                data.setVerifyToken(random)

                SuccessResponse.generateOTPResponse(res, '', data)
            }
        })
    }

    static verify(req: Request, res: Response) {
        const otpr = new VerifyOTPRequest()
        const vtokenq = new VerifyTokenQuery()
        otpr.setOTPCode(req.body["otp_code"])
        otpr.setVerifyToken(req.body["verify_token"])

        if (otpr.validate(otpr) == false) return FailedResponse.bodyFailed(res, "")

        db.query(vtokenq.getByVtoken(otpr.getVerifyToken()), (error, result) => {

            if (error) return FailedResponse.queryFailed(res, "")
            if (result[0] == null) return FailedResponse.queryFailed(res, "")

            if (result[0].secret_key != "") {

                const token = JwtUtil.getJwt(result[0].email)
                const verify = twofactor.verifyToken(result[0].secret_key, otpr.getOTPCode().toString());
                if (verify.delta == 0) {
                    SuccessResponse.verifyOTPSuccess(res, token)
                } else {
                    FailedResponse.verifyOTPFailed(res, '')
                }
            }
        })


    }
}
