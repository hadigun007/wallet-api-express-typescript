import { Request, Response } from "express";
import db from '../database/database'
import Controller from "./controller";
import { WalletQuery } from "../database/query/wallet_query";
import { WalletModel } from "../model/wallet_model";
import { AuthController } from "./auth_controller";
import { JwtUtil } from "../util/jwt_util";
import { FailedResponse } from "../response/failed_response";
import { SuccessResponse } from "../response/success_response";
import { CWEthereum } from "./wallet/create_wallet";
import { Bip39Controller } from "./bip39_controller";
import { ChainController } from "./chain_controller";
import config from '../../config.json'


export class WalletController implements Controller {
    index(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    async store(req: Request, res: Response): Promise<any> {
        const walletq = new WalletQuery()
        const request_data = new WalletModel()
        const email = AuthController.get_auth_user().getEmail()
        const token = JwtUtil.getJwt(email)
        const new_wallet = new CWEthereum()
        const chainc = new ChainController()
        const bip39c = new Bip39Controller()
        const bip39 = await bip39c.show2("id", req.body["bip39_id"])
        const chain = await chainc.show2("id", req.body["chain_id"])
        const count = await WalletController.walletLength()
        const account = req.body["account_id"]

        request_data.setName(req.body["name"])
        request_data.setChain(chain)
        request_data.setBip39(bip39)
        request_data.setPath(`m/44'/60'/${account}'/${count+1}`)

        const w = new_wallet.createWallet(request_data)

        console.log(w);

        if (request_data.validateStore(w) == false) return FailedResponse.bodyFailed(res, token)

        db.query(walletq.create(w), (error, _) => {
            console.log(error);
            
            if (error) return FailedResponse.queryFailed(res, "")

            return SuccessResponse.storeSuccess(res, '', null)
        })
    }

    static async  walletLength(): Promise<number> {
        const mysql = require('mysql2/promise');
        const conn = await mysql.createConnection({ 
            host: config.database.host,
            user: config.database.user.name,
            password:  config.database.user.password,
            database: config.database.database
         });
        const walletq = new WalletQuery()
        const [rows] = await conn.execute(walletq.length());
        await conn.end();
        
        return rows[0].count
    

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