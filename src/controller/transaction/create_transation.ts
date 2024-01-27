import { TransactionModel } from "../../model/transaction_model";
import { Crypto } from "../../util/crypto";

const ethers = require('ethers');


export abstract class TransactionCreator {
    public abstract createTransaction(raw_transactiont: TransactionModel): TransactionModel;
    public abstract getTransaction(): TransactionModel;
}

export interface Transaction {
    wallet: TransactionModel
}

export class CTEthereum extends TransactionCreator {
    public createTransaction(raw_transactiont: TransactionModel): TransactionModel {
        // create
        // sign
        // broadcast
        throw new Error("Method not implemented.");
    }
    public getTransaction(): TransactionModel {
        throw new Error("Method not implemented.");
    }

}