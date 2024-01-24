import { LoginRequest } from '../../model/request/login_request';
import db from '../database'
import { Query } from './query';

export class AuthQuery implements Query {
    edit(data: any): string {
        throw new Error('Method not implemented.');
    }
    index(): string {
        throw new Error("Method not implemented.");
    }
    create(): string {
        throw new Error("Method not implemented.");
    }
    show(): string {
        throw new Error("Method not implemented.");
    }
    delete(): string {
        throw new Error("Method not implemented.");
    }

    login(user:LoginRequest):string{
        return `SELECT * FROM users WHERE email = ${db.escape(user.getEmail())};`
    }
}