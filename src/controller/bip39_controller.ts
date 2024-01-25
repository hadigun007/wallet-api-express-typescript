import { generateMnemonic } from 'bip39'
import { SuccessResponse } from '../response/success_response';
import { Request, Response } from "express";
import { FailedResponse } from '../response/failed_response';
import { AuthController } from './auth_controller';
import { JwtUtil } from '../util/jwt_util';
import Controller from './controller';
import db from '../database/database'
import { Bip39Query } from '../database/query/bip39_query';
import { Bip39Model } from '../model/bip39_model';
import { Crypto } from '../util/crypto';
import { ToArray } from '../util/to_array';
import { Keyval } from '../model/keyval_model';


export class Bip39Controller implements Controller{

    index(req: Request, res: Response):any {
        const bip39q = new Bip39Query()
        const email = AuthController.get_auth_user().getEmail()
        const token = JwtUtil.getJwt(email)

        db.query(bip39q.index(), (error, result)=>{
            if (error) return FailedResponse.queryFailed(res, token)
            if (result.length == 0) return SuccessResponse.indexDataEmpty(res, "")
            
            const response_data = ToArray.listBip39ToArray(result)

            SuccessResponse.indexSuccess(res, token, response_data)
        })
    }

    store(req:Request, res:Response):any {
        const bip39q = new Bip39Query()
        const request_data = new Bip39Model()
        const email = AuthController.get_auth_user().getEmail()
        const token = JwtUtil.getJwt(email)
        const mnemonic = generateMnemonic()

        request_data.setName(req.body["name"])
        request_data.setPassword(req.body["password"])
        request_data.setMnemonic(Crypto.encryptData(mnemonic))
    
        if (Bip39Model.validateStore(request_data) == false) return FailedResponse.bodyFailed(res, token)

        db.query(bip39q.create(request_data), (error, result)=>{
            
            if (error) return FailedResponse.queryFailed(res, token)
            if (result.affectedRows == 0) return FailedResponse.storeFailed(res, "")

            return SuccessResponse.storeSuccess(res, token, null)
        })
    }
    
    show(req: Request, res: Response):any {
        const key_val = new Keyval()
        const bip39q = new Bip39Query()
        const request_data = new Bip39Model()
        const email = AuthController.get_auth_user().getEmail()
        const token = JwtUtil.getJwt(email)

        key_val.setKey(req.body["key"])
        key_val.setVal(req.body["value"])

        if(Keyval.validate(key_val) == false) return FailedResponse.bodyFailed(res, "")

        db.query(bip39q.show(key_val), (error, result)=>{
            if (error) return FailedResponse.queryFailed(res, token)
            if (result.length == 0) return FailedResponse.queryFailed(res, "")


            SuccessResponse.showSuccess(res, token, result[0])
        })
    }

    update(req: Request, res: Response):any {
        const bip39q = new Bip39Query()
        const request_data = new Bip39Model()
        const email = AuthController.get_auth_user().getEmail()
        const token = JwtUtil.getJwt(email)

        request_data.setId(req.body["id"])
        request_data.setName(req.body["name"])

        if(Bip39Model.validateUpdate(request_data) == false) return FailedResponse.bodyFailed(res, token)

        db.query(bip39q.edit(request_data), (error, result)=>{
            console.log(error);
            
            if (error) return FailedResponse.queryFailed(res, token)
            if (result.affectedRows == 0) return FailedResponse.queryFailed(res, token)
        
            SuccessResponse.editSuccess(res,token)
        })


        



    }
    destroy(req: Request, res: Response): Response {
        throw new Error('Method not implemented.');
    }

}
