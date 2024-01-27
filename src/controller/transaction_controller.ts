import { Request, Response } from "express";
import db from '../database/database'
import Controller from "./controller";
import { TransactionQuery } from "../database/query/transaction_query";
import { AuthController } from "./auth_controller";
import { JwtUtil } from "../util/jwt_util";
import { RowDataPacket } from "mysql2";
import { FailedResponse } from "../response/failed_response";
import { SuccessResponse } from "../response/success_response";
import { TransactionModel } from "../model/transaction_model";
import { ProviderController } from "./provider_controller";
import { WalletController } from "./wallet_controller";
import { CTEthereum } from "./transaction/create_transation";

export class TransactionController implements Controller {
    public store(req: Request, res: Response<any, Record<string, any>>): Response<any, Record<string, any>> {
        throw new Error("Method not implemented.");
    }
    async store2(req: Request, res: Response): Promise<any> {
        const transactionq = new TransactionQuery()
        const request_data = new TransactionModel()
        const provider = await  ProviderController.show2("id", req.body["provider_id"])
        const sender = await WalletController.show2("id", req.body["sender_id"])
        const email = AuthController.get_auth_user().getEmail()
        const token = JwtUtil.getJwt(email)
        const transaction = new CTEthereum()

        

        request_data.setSender(sender)
        request_data.setReciver(req.body["receiver"])
        request_data.setAmount(req.body["amount"])
        request_data.setProvider(provider)


        console.log(request_data);

        const new_transaction = transaction.createTransaction(request_data)
        
        console.log((new_transaction));
        
        
    
        if (TransactionModel.validateStore(request_data) == false) return FailedResponse.bodyFailed(res, token)



        db.query<RowDataPacket[]>(transactionq.create(request_data), (error, result)=>{
            
            if (error) return FailedResponse.queryFailed(res, token)

            return SuccessResponse.storeSuccess(res, token, null)
        })
    }
    index(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
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