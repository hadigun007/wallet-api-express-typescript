import { Query } from "./query";

export class TransactionQuery implements Query {
    create(data: any): string {
        throw new Error("Method not implemented.");
    }
    index(): string {
        throw new Error("Method not implemented.");
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