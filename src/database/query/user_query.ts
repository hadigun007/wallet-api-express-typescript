import { Keyval } from '../../model/keyval_model';
import { UserModel } from '../../model/user_model';
import { Moment } from '../../util/moment';
import db from '../database'
import { Query } from './query';

export class UserQuery implements Query {
    edit(data: any): string {
        throw new Error('Method not implemented.');
    }
    index(): string {
        throw new Error("Method not implemented.");
    }
    create(user: UserModel): string {
        return `
        INSERT INTO 
            users 
            (name, email, password, role, status_id, created_at, updated_at)
        VALUES
            (${db.escape(user.getName())}, 
            ${db.escape(user.getEmail())}, 
            ${db.escape(user.getPassword())},
            ${db.escape(user.getRole())},
            1,
            '${Moment.getCurrent()}',
            '${Moment.getCurrent()}');
        `
    }

    show(keyval:Keyval): string {
        return `SELECT * from users WHERE ${keyval.getKey()} = ${db.escape(keyval.getVal())};`
    }
    delete(): string {
        throw new Error("Method not implemented.");
    }
}

