import { Moment } from "../../util/moment"
import db from "../database"

export class TransactionMigration {

    static table_name = 'transactions'

    static migrate() {

        db.query(`DROP TABLE IF EXISTS transactions;`, (error, result) => {
            if (error) return console.log(error)
        })

        db.query(`
        CREATE TABLE transactions (
            id INT PRIMARY KEY AUTO_INCREMENT,
            tx_hash VARCHAR(255) NOT NULL,
            block VARCHAR(255) NOT NULL,
            type_id VARCHAR(255) NOT NULL,
            sender VARCHAR(255) NOT NULL,
            receiver MEDIUMINT NOT NULL,
            amount VARCHAR(255)  NOT NULL,
            gass_fee VARCHAR(255)  NOT NULL,
            created_at datetime,
            updated_at datetime
            );`, (error, result) => {
            if (error) return console.log(error)
            console.log(`✅ migrate table ${this.table_name} berhasil\n`)
        })
    }

}