import { WalletModel } from "../../model/wallet_model";
import { Query } from "./query";
import db from "../database"
import { Moment } from "../../util/moment";


export class WalletQuery implements Query {

    index(): string {
        throw new Error("Method not implemented.");
    }
    create(data: WalletModel): string {
            return `
            INSERT INTO 
            wallets 
            (chain_id, name, bip39_id, address, address, public_key, private_key
                fingerprint, parent_fingerprint, path, created_at, updated_at)
            VALUES (
                ${db.escape(data.getChain().getId())},  ${db.escape(data.getName())},
                ${db.escape(data.getBip39().getId())},  ${db.escape(data.getAddress())},
                ${db.escape(data.getPublic_key())},  ${db.escape(data.getPrivate_key())},
                ${db.escape(data.getFingerprint())},  ${db.escape(data.getParentFingerprint())},
                ${db.escape(data.getPath())},  ${Moment.getCurrent()},${Moment.getCurrent()}
            );
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