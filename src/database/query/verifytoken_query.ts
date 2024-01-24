import db from '../database'
import { Query } from './query';

export class VerifyTokenQuery implements Query {
    edit(data: any): string {
        throw new Error('Method not implemented.');
    }
    index(): string {
        throw new Error("Method not implemented.");
    }
    create(data:VerifyTokenModel): string {
        return `UPDATE users SET verify_token = ${db.escape(data.getVerifyToken())} WHERE id = ${db.escape(data.getUserId())};`
    }
    getByVtoken(vtoken:string){
        return `SELECT * FROM users where verify_token = ${db.escape(vtoken)};`
    }
    show(): string {
        throw new Error("Method not implemented.");
    }
    delete(): string {
        throw new Error("Method not implemented.");
    }
}

export class VerifyTokenModel {
    verify_token!:string 
    user_id!:string 

    setVerifyToken(verify_token:string){
        this.verify_token = verify_token
    }

    setUserId(user_id:string){
        this.user_id = user_id
    }

    getVerifyToken():string{
        return this.verify_token
    }

    getUserId():string{
        return this.user_id
    }

    getPayload():VerifyTokenModel{
        return this
    }
}