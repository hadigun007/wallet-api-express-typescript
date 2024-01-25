import { Mnemonic, HDNodeWallet} from "ethers";
import { WalletModel } from "../../model/wallet_model";
import { Bip39Model } from "../../model/bip39_model";
import { Crypto } from "../../util/crypto";



export abstract class WalletCreator {
    public abstract  createWallet(raw_wallet:WalletModel):WalletModel;
    public abstract  getWallet():WalletModel;
}

export interface Wallet {
    wallet:WalletModel
}


export class CWEthereum extends WalletCreator {
    public createWallet(raw_wallet:WalletModel): WalletModel {
        const new_wallet = new WalletModel()
        const decrypted_mnemonic = Crypto.decryptData(raw_wallet.getBip39().getMnemonic())
        
        const mnemonic = Mnemonic.fromPhrase(decrypted_mnemonic, raw_wallet.getBip39().getPassword())
        const res = HDNodeWallet.fromMnemonic(mnemonic, raw_wallet.getPath())
        
        new_wallet.setChain(raw_wallet.getChain())
        new_wallet.setName(raw_wallet.getName())
        new_wallet.setBip39(raw_wallet.getBip39())
        raw_wallet.getBip39().setEntrophy(res.mnemonic?.entropy!)         
        new_wallet.setAddress(res.address)
        new_wallet.setPublic_key(res.publicKey)
        new_wallet.setPrivate_key(res.privateKey)
        new_wallet.setFingerprint(res.fingerprint)
        new_wallet.setParentFingerprint(res.parentFingerprint)
        new_wallet.setPath(res.path!)
        new_wallet.setCreated_at(new Date())
        new_wallet.setUpdated_at(new Date())

        return new_wallet
    }
    public getWallet(): WalletModel {
        throw new Error("Method not implemented.");
    }
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
