// Address Type	Derivation Path
// Legacy Bitcoin (BTC) address (starts with a 1)	m/44’/0’/0’/0/0
// SegWit Bitcoin (BTC) address (starts with a bc1q)	m/84’/0’/0’/0/0


// Default: Taproot Bitcoin (BTC) address (starts with a bc1p)	m/86’/0’/0’/0/0

import { WalletModel } from "../../model/wallet_model";
import { WalletCreator } from "./create_wallet";
import { Crypto } from "../../util/crypto";
import bitcoin from "bitcoinjs-lib";



function main(){
    // bitcoin.address.fromBech32('')
}

main()










export class CWBitcoin extends WalletCreator {
    public createWallet(raw_wallet:WalletModel): WalletModel {
        const new_wallet = new WalletModel()
        const decrypted_mnemonic = Crypto.decryptData(raw_wallet.getBip39().getMnemonic())

        raw_wallet.setPath(`
        m/44'/60'/0'/${raw_wallet.getAccountId()}'/${parseInt(raw_wallet.getIndexId())+1}
        `)

        // const menemonic = Mnemonic
        // const mnemonic = Mnemonic.fromPhrase(decrypted_mnemonic, raw_wallet.getBip39().getPassword())

        // console.log(mnemonic);
        



        
        return new WalletModel()
    }
}