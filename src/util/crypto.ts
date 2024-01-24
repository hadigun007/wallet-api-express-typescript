import { randomBytes } from 'crypto'
const bcrypt = require('bcrypt')
import aesjs from 'aes-js'
import config from '../../config.json'

export class Crypto {

    static randomHex(bytes: number): string {
        return randomBytes(bytes).toString('hex')
    }

    static hashPassword(plaintext:string){
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(plaintext, salt);
            return hash;
    }

    static checkPassword(plaintext:string, hashed:string):boolean{
        return bcrypt.compareSync(plaintext, hashed); 
    }

    static encryptData(data: string):any {
        var textBytes = aesjs.utils.utf8.toBytes(data);
    
        var aesCtr = new aesjs.ModeOfOperation.ctr(config.aes.key, new aesjs.Counter(5));
        var encryptedBytes = aesCtr.encrypt(textBytes);
    
        var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    
        return encryptedHex
    }
    
     static decryptData(encryptedHex:any){
        var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
    
        var aesCtr = new aesjs.ModeOfOperation.ctr(config.aes.key, new aesjs.Counter(5));
        var decryptedBytes = aesCtr.decrypt(encryptedBytes);
        
        var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    
        return decryptedText
    }
}