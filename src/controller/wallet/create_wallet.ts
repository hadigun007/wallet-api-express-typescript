import { WalletModel } from "../../model/wallet_model";



export abstract class WalletCreator {
    public abstract  createWallet(raw_wallet:WalletModel):WalletModel;
}

export interface Wallet {
    wallet:WalletModel
}



export class CWBitcoin extends WalletCreator {
    public createWallet(): WalletModel {
        throw new Error("Method not implemented.");
    }
    public getWallet(): WalletModel {
        throw new Error("Method not implemented.");
    }
}



export class BitcoinWallet implements Wallet {
    wallet = new WalletModel;
    
}
export class EthereumWallet implements Wallet {
    wallet = new WalletModel;
    
}
