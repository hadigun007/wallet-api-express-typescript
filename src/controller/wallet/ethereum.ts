import { Mnemonic, HDNodeWallet } from 'ethers'
import { CWEthereum } from './create_wallet'
import { WalletModel } from '../../model/wallet_model'
import { BlockchainModel } from '../../model/blockchain_model'
import { Bip39Model } from '../../model/bip39_model'

export class EthereumWallet {
    static fromMnemonic(mnemonic:Mnemonic, path:string){
        return HDNodeWallet.fromMnemonic(mnemonic, path)
    }
}

function main(){

    const cwethereum = new CWEthereum()
    const raw_wallet = new WalletModel()
    const raw_chain = new BlockchainModel()
    const raw_bip39 = new Bip39Model()
    raw_chain.setId(2)
    raw_bip39.setMnemonic('acoustic ivory rough mesh actress stick meadow arm bomb sea sleep luxury')
    raw_bip39.setPassword('admin')

    raw_wallet.setChain(raw_chain)
    raw_wallet.setBip39(raw_bip39)
    raw_wallet.setName('hadi')

    const result = cwethereum.createWallet(raw_wallet)
    console.log(result);
    
}


main()