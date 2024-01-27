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
import { RowDataPacket } from "mysql2";
import { ToArray } from "../util/to_array";
import { Keyval } from "../model/keyval_model";
import { Crypto } from "../util/crypto";


export class WalletController implements Controller {
    store(req: Request, res: Response<any, Record<string, any>>): Response<any, Record<string, any>> {
        throw new Error("Method not implemented.");
    }
    index(req: Request, res: Response):any {
        const walletq = new WalletQuery()
        const email = AuthController.get_auth_user().getEmail()
        const token = JwtUtil.getJwt(email)

        db.query<RowDataPacket[][]>(walletq.index(), async (error, result)=>{

            if (error) return FailedResponse.queryFailed(res, token)
            if (result.length == 0) return SuccessResponse.indexDataEmpty(res, "")
            
            const response_data = ToArray.listWallletToArray(result)
        
            SuccessResponse.indexSuccess(res, token, response_data)
        })
    }
    
    async store2(req: Request, res: Response): Promise<any> {
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

        if (request_data.validateStore(w) == false) return FailedResponse.bodyFailed(res, token)

        db.query(walletq.create(w), (error, _) => {
            console.log();
            
            if (error) return FailedResponse.queryFailed(res, token)

            return SuccessResponse.storeSuccess(res, token, null)
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


    show(req: Request, res: Response):any {
        const key_val = new Keyval()
        const walletq = new WalletQuery()
        const email = AuthController.get_auth_user().getEmail()
        const token = JwtUtil.getJwt(email)

        key_val.setKey(req.body["key"])
        key_val.setVal(req.body["value"])

        if(Keyval.validate(key_val) == false) return FailedResponse.bodyFailed(res, "")

        db.query<RowDataPacket[]>(walletq.show(key_val), (error, result, f)=>{
            console.log(error);
            console.log(result);
            
            if (error) return FailedResponse.queryFailed(res, token)
            if (result.length == 0) return FailedResponse.queryFailed(res, "")

            const response_data = ToArray.listWallletToArray(result[0])
            

            SuccessResponse.showSuccess(res, token, response_data)
        })
    }

    static async show2(key: string, id: string): Promise<any> {
        const mysql = require('mysql2/promise');
        const conn = await mysql.createConnection({ 
            host: config.database.host,
            user: config.database.user.name,
            password:  config.database.user.password,
            database: config.database.database
         });
        const key_val = new Keyval()
        const providerq = new WalletQuery()
        const wallet = new WalletModel()
        
        key_val.setKey(key)
        key_val.setVal(id)

        const [rows] = await conn.execute(providerq.show2(key_val));
        wallet.setAddress(rows[0].address)
        wallet.setPrivate_key(Crypto.decryptData(rows[0].private_key))
        await conn.end();
        return wallet
    }
    update(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    destroy(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }

}