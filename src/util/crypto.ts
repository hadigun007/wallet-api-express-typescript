import crypto, { randomBytes } from 'crypto'
const bcrypt = require('bcrypt')

export class Crypto {
    key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

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
}