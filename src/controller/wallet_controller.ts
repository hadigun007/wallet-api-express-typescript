import { Request, Response } from "express";
import db from '../database/database'
import Controller from "./controller";
import { WalletQuery } from "../database/query/wallet_query";
import { WalletModel } from "../model/wallet_model";
import { AuthController } from "./auth_controller";
import { JwtUtil } from "../util/jwt_util";
import { FailedResponse } from "../response/failed_response";
const bitcoin = require('bitcoinjs-lib');
import {mnemonicToSeedSync} from 'bip39';
import { SuccessResponse } from "../response/success_response";
const bip32 = require('bip32');

export class WalletController implements Controller {
    index(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    store(req: Request, res: Response):any {
        const walletq = new WalletQuery()
        const request_data = new WalletModel()
        const email = AuthController.get_auth_user().getEmail()
        const token = JwtUtil.getJwt(email)

        request_data.setName(req.body["name"])
        request_data.setChain(req.body["chain_id"])
        request_data.setPath(req.body["path"])

        if(request_data.validateStore(request_data) == false) return FailedResponse.bodyFailed(res, token)

        db.query(walletq.create(request_data), (error, result)=>{
            if (error) return FailedResponse.queryFailed(res, "")
            if (result.affectedRows == 0) return FailedResponse.storeFailed(res, "")

            return SuccessResponse.storeSuccess(res, '', null)

        })
    }

    show(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    update(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    destroy(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }

}