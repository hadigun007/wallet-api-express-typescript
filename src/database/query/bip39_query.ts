import { Bip39Model } from "../../model/bip39_model";
import { Query } from "./query";
import db from '../database'
import { Moment } from "../../util/moment";

export class Bip39Query implements Query {
    index(): string {
        throw new Error("Method not implemented.");
    }
    create(data: Bip39Model): string {
        return `
        INSERT INTO bip39 (name, mnemonic, created_at, updated_at)
        VALUES (${db.escape(data.getName())}, ${db.escape(data.getMnemonic())},
        '${Moment.getCurrent()}', '${Moment.getCurrent()}');
        `
    }
    show(data: any): string {
        throw new Error("Method not implemented.");
    }
    delete(data: any): string {
        throw new Error("Method not implemented.");
    }
    
}