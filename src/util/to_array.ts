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
    
    static listWallletToArray(wallets:any){
        const arr_temp = []
        
        for(let i in wallets){
            const w = wallets[i]
        
            const bip39 = new Bip39Model()
            bip39.setId(w.bip39_id)
            bip39.setName(w.bip39_name)
            bip39.setMnemonic(Crypto.decryptData(w.bip39_mnemonic))
            bip39.setPassword(w.bip39_password)
            
            const chain = new BlockchainModel()
            chain.setId(w.blockchains_id)
            chain.setName(w.blockchains_name)
            chain.setSymbol(w.blockchains_symbol)
            chain.setBasePath(w.blockchains_basepath)
            chain.setCreatedAt(w.blockchains_created_at)
            chain.setUpdatedAt(w.blockchains_updated_at)

            const wallet = new WalletModel()
            wallet.setId(w.wallet_id)
            wallet.setName(w.wallet_name)
            wallet.setBip39(bip39)
            wallet.setChain(chain)
            wallet.setAddress(w.wallet_address)
            wallet.setPublic_key(w.wallet_public_key)
            wallet.setPrivate_key(Crypto.decryptData(w.wallet_private_key))
            wallet.setFingerprint(w.wallet_fingerprint)
            wallet.setParentFingerprint(w.wallet_parent_fingerprint)
            wallet.setPath(w.wallet_path)
            wallet.setCreated_at(w.wallet_created_at)
            wallet.setUpdated_at(w.wallet_updated_at)
            
            arr_temp.push(wallet)
        }        
        return arr_temp
    }
}