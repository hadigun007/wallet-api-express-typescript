import { Query } from "./query";

export class WalletQuery implements Query {

    index(): string {
        throw new Error("Method not implemented.");
    }
    create(data: any): string {
            return `
            INSERT INTO 
            wallets 
            ()
            `
    }
    edit(data: any): string {
        throw new Error("Method not implemented.");
    }
    show(data: any): string {
        throw new Error("Method not implemented.");
    }
    delete(data: any): string {
        throw new Error("Method not implemented.");
    }

}