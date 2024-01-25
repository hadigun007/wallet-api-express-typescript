import { Request, Response } from "express";
import Controller from "./controller";
import { Keyval } from "../model/keyval_model";
import { FailedResponse } from "../response/failed_response";
import { AuthController } from "./auth_controller";
import { JwtUtil } from "../util/jwt_util";
import db from '../database/database'
import { ChainQuery } from "../database/query/chain_query";
import { SuccessResponse } from "../response/success_response";

export class ChainController implements Controller {
    index(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    store(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    show(req: Request, res: Response): any {
        const key_val = new Keyval()
        const chainq = new ChainQuery()
        const email = AuthController.get_auth_user().getEmail()
        const token = JwtUtil.getJwt(email)
        
        key_val.setKey(req.body["key"])
        key_val.setVal(req.body["value"])

        if(Keyval.validate(key_val) == false) return FailedResponse.bodyFailed(res, token)

        db.query(chainq.show(key_val), (error, result)=>{
            if (error) return FailedResponse.queryFailed(res, token)
            if (result.length == 0) return FailedResponse.queryFailed(res, "")


            SuccessResponse.showSuccess(res, token, result[0])
        })
    

    }
    update(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    destroy(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
}