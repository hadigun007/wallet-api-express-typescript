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
}