import { generateMnemonic } from 'bip39'
import { SuccessResponse } from '../response/success_response';
import { GenerateMnemonicResponse } from '../model/response/generate_mnemonic_response';
import { Request, Response } from "express";
import { FailedResponse } from '../response/failed_response';
import { AuthController } from './auth_controller';
import { WalletModel } from '../model/wallet_model';
import { JwtUtil } from '../util/jwt_util';
import Controller from './controller';
import db from '../database/database'
import { Bip39Query } from '../database/query/bip39_query';
import { Bip39Model } from '../model/bip39_model';
import { Crypto } from '../util/crypto';


export class Bip39Controller implements Controller{
    store(req:Request, res:Response):any {
        const request_data = new WalletModel()
        const email = AuthController.get_auth_user().getEmail()
        const token = JwtUtil.getJwt(email)
        const bip39q = new Bip39Query()
        const mnemonic = generateMnemonic()

        request_data.setName(req.body["name"])
        request_data.setMnemonic(Crypto.encryptData(mnemonic))
    
        if (WalletModel.validateGenerateMnemonic(request_data) == false) return FailedResponse.bodyFailed(res, token)

        db.query(bip39q.create(request_data), (error, result)=>{
            
            if (error) return FailedResponse.queryFailed(res, "")
            if (result.affectedRows == 0) return FailedResponse.storeFailed(res, "")

            return SuccessResponse.storeSuccess(res, token, null)
        })
    }
    index(req: Request, res: Response):any {
        throw new Error('Method not implemented.');
    }
    show(req: Request, res: Response): Response {
        throw new Error('Method not implemented.');
    }
    update(req: Request, res: Response): Response {
        throw new Error('Method not implemented.');
    }
    destroy(req: Request, res: Response): Response {
        throw new Error('Method not implemented.');
    }

}
