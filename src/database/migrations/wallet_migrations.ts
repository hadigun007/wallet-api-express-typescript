import db from "../database"


export class WalletMigration {
    static table_name = 'wallets'

    static migrate(){
        db.query(`DROP TABLE IF EXISTS wallets`, (error, result) => {
            if (error) return console.log(error)
        })

        db.query(`
        CREATE TABLE wallets (
            id INT PRIMARY KEY AUTO_INCREMENT,
            chain_id INT NOT NULL,
            name VARCHAR(255) UNIQUE NOT NULL,
            bip39_id INT UNIQUE NOT NULL,
            address VARCHAR(255) UNIQUE NOT NULL,
            public_key VARCHAR(255) UNIQUE NOT NULL,
            private_key VARCHAR(255) UNIQUE NOT NULL,
            fingerprint VARCHAR(255) UNIQUE NOT NULL,
            parent_fingerprint VARCHAR(255) UNIQUE NOT NULL,
            path VARCHAR(255) UNIQUE NOT NULL,
            created_at datetime,
            updated_at datetime,

            FOREIGN KEY (chain_id) REFERENCES blockchains(id),
            FOREIGN KEY (bip39_id) REFERENCES bip39(id)
            );`, (error, result) => {
            if (error) return console.log(error)
            console.log(`✅ migrate table ${this.table_name} berhasil`)
        })
    }

    
}