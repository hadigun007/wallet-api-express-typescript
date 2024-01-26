import { Bip39Model } from "../model/bip39_model"
import { BlockchainModel } from "../model/blockchain_model"
import { WalletModel } from "../model/wallet_model"
import { Crypto } from "./crypto"

export class ToArray {
    static listBip39ToArray(users:any){
        const arr_temp = []
        for(let i in users){
            const bip39_temp = users[i]
            bip39_temp.mnemonic = Crypto.decryptData(bip39_temp.mnemonic)
            arr_temp.push(bip39_temp)
        }
        return arr_temp
    }
    
    static listWallletToArray(wallet:any){

        console.log(wallet);
        console.log(wallet.bip39_mnemonic);
        console.log("wallet.wallet_id");
        
        
        
            const bip39 = new Bip39Model()
            bip39.setId(wallet.bip39_id)
            bip39.setName(wallet.bip39_name)
            // bip39.setMnemonic(Crypto.decryptData(wallet.bip39_mnemonic))
            bip39.setPassword(wallet.bip39_password)
            
            const chain = new BlockchainModel()
            chain.setId(wallet.blockchains_id)
            chain.setName(wallet.blockchains_name)
            chain.setSymbol(wallet.blockchains_symbol)
            chain.setBasePath(wallet.blockchains_basepath)
            chain.setCreatedAt(wallet.blockchains_created_at)
            chain.setUpdatedAt(wallet.blockchains_updated_at)

            const new_wallet = new WalletModel()
            new_wallet.setId(wallet.wallet_id)
            new_wallet.setName(wallet.wallet_name)
            new_wallet.setBip39(bip39)
            new_wallet.setChain(chain)
            new_wallet.setAddress(wallet.wallet_address)
            new_wallet.setPublic_key(wallet.wallet_public_key)
            // new_wallet.setPrivate_key(Crypto.decryptData(wallet.wallet_private_key))
            new_wallet.setFingerprint(wallet.wallet_fingerprint)
            new_wallet.setParentFingerprint(wallet.wallet_parent_fingerprint)
            new_wallet.setPath(wallet.wallet_path)
            new_wallet.setCreated_at(wallet.wallet_created_at)
            new_wallet.setUpdated_at(wallet.wallet_updated_at)
            

            return new_wallet
    }
}