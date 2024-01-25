import { Mnemonic, HDNodeWallet } from 'ethers'

export class EthereumWallet {
    static fromMnemonic(mnemonic:Mnemonic, path:string){
        return HDNodeWallet.fromMnemonic(mnemonic, path)
    }
}

function main(){
    const mnemonic = Mnemonic.fromPhrase('acoustic ivory rough mesh actress stick meadow arm bomb sea sleep luxury', 'admin')
    let res = EthereumWallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/1`)
    console.log(res)
    console.log(res.privateKey)   
}

main()