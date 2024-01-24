import { Bip39Model } from "../../model/bip39_model";
import { Query } from "./query";
import db from '../database'
import { Moment } from "../../util/moment";
import { Keyval } from "../../model/keyval_model";

export class Bip39Query implements Query {
    edit(data: Bip39Model): string {
        return `UPDATE bip39 SET name = ${db.escape(data.getName())} WHERE id = ${db.escape(data.id)};`
    }
    index(): string {
        return `SELECT * FROM bip39;`
    }
    create(data: Bip39Model): string {
        return `
        INSERT INTO bip39 (name, mnemonic, created_at, updated_at)
        VALUES (${db.escape(data.getName())}, ${db.escape(data.getMnemonic())},
        '${Moment.getCurrent()}', '${Moment.getCurrent()}');
        `
    }
    show(keyval: Keyval): string {
        return `
        SELECT * FROM bip39 WHERE ${keyval.getKey()} = ${db.escape(keyval.getVal())};
        `
    }
    delete(data: any): string {
        throw new Error("Method not implemented.");
    }
    
}