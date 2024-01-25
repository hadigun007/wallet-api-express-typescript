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
        // const bip39 = 
        // const private_key = 

        request_data.setName(req.body["name"])
        request_data.setChain(req.body["chain_id"])
        // request_data.setBip39Id(req.body["bip39_id"])
        request_data.setPath(req.body["path"])

        // if(WalletModel.validateStore(request_data) == false) return FailedResponse.bodyFailed(res, token)

        
          
          const mnemonic = `acoustic ivory rough mesh actress stick meadow arm bomb sea sleep luxury`;
          
          const seed = mnemonicToSeedSync(mnemonic)
          
          const root = bip32.fromSeed(seed, bitcoin.networks.bitcoin);
          
          const child1 = root.derivePath("m/84'/0'/0'/0/0");
          const child2 = root.deriveHardened(84).deriveHardened(0).deriveHardened(0).derive(0).derive(0);
          
          console.log(seed);
          console.log(child1);
          console.log(child2);


        db.query(walletq.create(request_data), (error, result)=>{

        })



        throw new Error("Method not implemented.");
    }
    getAddress (node:any, network:any) {
        return bitcoin.payments.p2wpkh({ pubkey: node.publicKey, network }).address
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