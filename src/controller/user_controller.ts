import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Controller from "./controller";
import { UserModel } from "../model/user_model";
import { Crypto } from "../util/crypto";
import { FailedResponse } from "../response/failed_response";
import db from '../database/database'
import { UserQuery } from "../database/query/user_query";
import { SuccessResponse } from "../response/success_response";

export class UserController implements Controller {
    index(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Response<any, Record<string, any>> {
        throw new Error("Method not implemented.");
    }



    store(req: Request, res: Response):any {
        const new_user = new UserModel()
        const userq = new UserQuery()
        new_user.setName(req.body["name"])
        new_user.setEmail(req.body["email"])
        new_user.setPassword(Crypto.hashPassword(req.body["password"]))
        new_user.setRole(req.body["role"])

        if(new_user.valaidateCreate(new_user) == false) FailedResponse.bodyFailed(res, '') 

        db.query(userq.create(new_user), (error, result)=>{
            
            if (error) return FailedResponse.queryFailed(res, "")
            if (result.affectedRows == 0) return FailedResponse.storeFailed(res, "")

            return SuccessResponse.storeSuccess(res, '', null)
        })
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

// function create(req: Request, res: Response) {
//     const token = JwtUtil.getToken(req, res)
//     const user = req.body as c.CreateUserModel
//     const verify_token = c2.randomHex(24)
//     const url = e3.getEmailVerificationUrl(verify_token)
//     const payload = new EmailVerificationModel()
//     user.password = p.hashPassword(user.password)
//     user.verify_token = verify_token

//     if (c.validate(user) == false) return FailedResponse.paramRequestFailed(res, token)

//     db.query(UserQuery.createUser(user), async (error: any, result: any) => {
//         if (error) return FailedResponse.queryFailed(res, token)
//         if (result.affectedRows == 0) return FailedResponse.queryFailed(res, token)

//         payload.setUsermae(user.name)
//         payload.setUrl(url)
//         payload.setTo(user.email)

//         // const result2 = await e2.emailVerification(payload)
//         // if (result2 == false) return u.sendEmailfailed(res, '')
//         SuccessReponse.createSuccess(res, token)
//     })
// }
