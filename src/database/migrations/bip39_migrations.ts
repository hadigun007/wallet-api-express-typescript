import db from "../database"


export class Bip39Migrations {
    static table_name = 'bip39'

    static migrate(){
        db.query(`DROP TABLE IF EXISTS bip39`, (error, result) => {
            if (error) return console.log(error)
        })

        db.query(`
        CREATE TABLE bip39 (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255) UNIQUE NOT NULL,
            mnemonic VARCHAR(255) UNIQUE NOT NULL,
            created_at datetime,
            updated_at datetime
            );`, (error, result) => {
            if (error) return console.log(error)
            console.log(`✅ migrate table ${this.table_name} berhasil`)
        })
    }

    
}