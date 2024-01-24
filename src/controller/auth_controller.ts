import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Controller from "./controller";
import { FailedResponse } from "../response/failed_response";
import db from '../database/database'
import { Crypto } from "../util/crypto";
import { AuthQuery } from "../database/query/auth_query";
import { VerifyTokenModel, VerifyTokenQuery } from "../database/query/verifytoken_query";
import { SuccessResponse } from "../response/success_response";
import { LoginResponse } from "../model/response/login_response";
import { LoginRequest } from "../model/request/login_request";
import { UserModel } from "../model/user_model";
import { UserQuery } from "../database/query/user_query";
import { Keyval } from "../model/keyval_model";

export class AuthController implements Controller {
    static auth_user = new UserModel()

    static set_auth_user(email:string){
        const userq = new UserQuery()
        const key_val = new Keyval()

        key_val.setKey('email')
        key_val.setVal(email)

        db.query(userq.show(key_val), (error, result)=>{
            console.log(error);
            console.log(result);
            if(error) return 
            
            this.auth_user.setId(result[0].id)
            this.auth_user.setName(result[0].name)
            this.auth_user.setEmail(result[0].email)
            this.auth_user.setPassword(result[0].password)
            this.auth_user.setRole(result[0].role)
            this.auth_user.setSecretKey(result[0].secret_key)
            this.auth_user.setOtpauthUrl(result[0].otpauth_url)
            this.auth_user.setVToken(result[0].verify_token)
            this.auth_user.setCreatedAt(result[0].created_at)
            this.auth_user.setUpdatedAt(result[0].updated_at)
            this.auth_user.setStatusId(result[0].status_id)
        })
    }

    static get_auth_user():UserModel{
        return this.auth_user;
    }
    

    static login(req:Request, res:Response){
        const verify_token = new VerifyTokenModel()
        const user = new LoginRequest()
        const userq = new AuthQuery()
        const verifytokenq = new VerifyTokenQuery()
        const random = Crypto.randomHex(24)
        let data = new LoginResponse()
        
        user.setEmail(req.body["email"])
        user.setPassword(req.body["password"])
        
        if (user.validate(user) == false) return FailedResponse.bodyFailed(res, "")

        db.query(userq.login(user), (error: any, result: any) => {
            
            if (error) return FailedResponse.queryFailed(res, "")
            if (Crypto.checkPassword(user.getPassword(), result[0].password) == false) return FailedResponse.loginFailed(res, "")
            if (result[0].status_id == "4") return FailedResponse.userFreezed(res, '')
            
            verify_token.setVerifyToken(random)
            verify_token.setUserId(result[0].id)

            db.query(verifytokenq.create(verify_token), (error2, result2) => {
                
                if (error2) return FailedResponse.queryFailed(res, "")
                if (result.length == 0) return FailedResponse.queryFailed(res, "")
               
                AuthController.set_auth_user(user.getEmail())
                data.setVerifyToken(verify_token.getVerifyToken())
                data.setStatus(result[0].status_id)

                SuccessResponse.loginSuccess(res,'', data.getPayload())
            })

        })
    }
    static logout(){}

    index(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Response<any, Record<string, any>> {
        throw new Error("Method not implemented.");
    }
    store(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Response<any, Record<string, any>> {
        throw new Error("Method not implemented.");
    }
    show(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Response<any, Record<string, any>> {
        throw new Error("Method not implemented.");
    }
    update(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Response<any, Record<string, any>> {
        throw new Error("Method not implemented.");
    }
    destroy(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Response<any, Record<string, any>> {
        throw new Error("Method not implemented.");
    }
}