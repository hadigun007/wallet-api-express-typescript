import { Keyval } from "../../model/keyval_model";
import { Query } from "./query";
import db from '../database'

export class ProviderQuery implements Query {
    index(): string {
        throw new Error("Method not implemented.");
    }
    create(data: any): string {
        throw new Error("Method not implemented.");
    }
    edit(data: any): string {
        throw new Error("Method not implemented.");
    }
    show(keyval: Keyval): string {
        return `
        SELECT * FROM providers WHERE ${keyval.getKey()} = ${db.escape(keyval.getVal())};
        `
    }
    delete(data: any): string {
        throw new Error("Method not implemented.");
    }

}