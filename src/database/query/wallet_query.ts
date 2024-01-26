import { WalletModel } from "../../model/wallet_model";
import { Query } from "./query";
import db from "../database"
import { Moment } from "../../util/moment";
import { Crypto } from "../../util/crypto";


export class WalletQuery implements Query {

    index(): string {
        return `
        SELECT 
            wallets.id AS wallet_id,
            wallets.name AS wallet_name,
            wallets.address AS wallet_address,
            wallets.public_key AS wallet_public_key,
            wallets.private_key AS wallet_private_key,
            wallets.fingerprint AS wallet_fingerprint,
            wallets.parent_fingerprint AS wallet_parent_fingerprint,
            wallets.path AS wallet_path,
            wallets.created_at AS wallet_created_at,
            wallets.updated_at AS wallet_updated_at,

            bip39.id AS bip39_id,
            bip39.name AS bip39_name,
            bip39.mnemonic AS bip39_mnemonic,
            bip39.password AS bip39_password,
            bip39.password AS bip39_password,
            bip39.created_at AS  bip39_created_at,
            bip39.updated_at AS  bip39_updated_at,
            
            blockchains.id AS blockchains_id,
            blockchains.name AS blockchains_name,
            blockchains.symbol AS blockchains_symbol,
            blockchains.basepath AS blockchains_basepath,
            blockchains.created_at AS blockchains_created_at,
            blockchains.updated_at AS blockchains_updated_at
        FROM 
            wallets
        LEFT JOIN
            bip39 ON bip39.id = wallets.bip39_id
        LEFT JOIN
            blockchains ON blockchains.id = wallets.chain_id;`
    }
    create(data: WalletModel): string {
            return `
            INSERT INTO 
            wallets 
            (chain_id, name, bip39_id, address, public_key, private_key,
                fingerprint, parent_fingerprint, path, created_at, updated_at)
            VALUES (
                ${db.escape(data.getChain().getId())},  
                ${db.escape(data.getName())},
                ${db.escape(data.getBip39().getId())},  
                ${db.escape(data.getAddress())},
                ${db.escape(data.getPublic_key())},  
                ${db.escape(Crypto.encryptData(data.getPrivate_key()))},
                ${db.escape(data.getFingerprint())},  
                ${db.escape(data.getParentFingerprint())},
                ${db.escape(data.getPath())},  
                '${Moment.getCurrent()}',
                '${Moment.getCurrent()}'
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

    length(){
        return `SELECT COUNT(*) AS count FROM wallets;`
    }
}

// INSERT INTO \n' +
//     '            wallets \n' +
//     '            (chain_id, name, bip39_id, address, address, public_key, private_key\n' +
//     '                fingerprint, parent_fingerprint, path, created_at, updated_at)\n' +
//     '            VALUES (\n' +
//     "                2,  
//                      'wallet 1',
//     '                1,  
//                      NULL,\n' +
//     '                NULL,  NULL,\n' +
//     '                NULL,  NULL,\n' +
//     '                NULL,  2024-01-25 21:51:59,2024-01-25 21:51:59\n' +
//     '            );\n' +