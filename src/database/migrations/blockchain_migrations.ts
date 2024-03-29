import { Moment } from "../../util/moment";
import db from "../database"


export class BlockchainMigration {
    static table_name = 'blockchains';

    static migrate(){
        db.query(`DROP TABLE IF EXISTS blockchains;`, (error, result) => {
            if (error) return console.log(error)
        })

        db.query(`
        CREATE TABLE blockchains (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            symbol VARCHAR(255) NOT NULL,
            basepath VARCHAR(255) UNIQUE NOT NULL,
            created_at datetime,
            updated_at datetime
            );`, (error, result) => {
            if (error) return console.log(error)
            console.log(`✅ migrate table ${this.table_name} berhasil`)
        })

        db.query(`
        INSERT INTO blockchains
        (id, name, symbol, basepath, created_at, updated_at)
        VALUES 
        (1, 'Bitcoin', 'BTC' , "m/44'/0'/0'/0/0", '${Moment.getCurrent()}', '${Moment.getCurrent()}'),
        (2, 'Ethereum', 'ETH' , "m/44'/60'/1'/1", '${Moment.getCurrent()}', '${Moment.getCurrent()}'),
        (3, 'Binance', 'BNB' , "m/44'/2'/0'/0/0", '${Moment.getCurrent()}', '${Moment.getCurrent()}'),
        (4, 'Solana', 'SOL' , "m/44'/3'/0'/0/0", '${Moment.getCurrent()}', '${Moment.getCurrent()}'),
        (5, 'Tron', 'TRON' , "m/44'/4'/0'/0/0", '${Moment.getCurrent()}', '${Moment.getCurrent()}');`,
        (error, result)=>{
            if (error) return console.log(error)
            console.log(`✅ seeder table ${this.table_name} berhasil\n`)
        } )
    }
}