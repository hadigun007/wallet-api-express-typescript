import db from '../database'

export class OTPQuery {
    createSecret(secret_key:string){
        return `UPDATE users SET secret_key = ${db.escape(secret_key)};`
    }
}