import { Moment } from "../../util/moment"
import db from "../database"

export class ProviderMigration {

    static table_name = 'providers'

    static migrate() {

        db.query(`DROP TABLE IF EXISTS providers;`, (error, result) => {
            if (error) return console.log(error)
        })

        db.query(`
        CREATE TABLE providers (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            tag VARCHAR(255) NOT NULL,
            endpoint VARCHAR(255) NOT NULL,
            chain_id INT  NOT NULL,
            environtment VARCHAR(255)  NOT NULL,
            created_at datetime,
            updated_at datetime,

            FOREIGN KEY (chain_id) REFERENCES blockchains(id)
            );`, (error, result) => {
            if (error) return console.log(error)
            console.log(`✅ migrate table ${this.table_name} berhasil`)
        })
        
        db.query(`
        INSERT INTO providers
        (id, name, tag, endpoint, chain_id, environtment, created_at, updated_at)
        VALUES 
        (1, 'infura', 'ethereum mainnet', 'https://mainnet.infura.io/v3' , 2, 'mainnet', '${Moment.getCurrent()}', '${Moment.getCurrent()}'),
        (2, 'infura', 'ethereum goerli', 'https://goerli.infura.io/v3' , 2, 'testnet', '${Moment.getCurrent()}', '${Moment.getCurrent()}'),
        (3, 'infura', 'ethereum sepolia', 'https://sepolia.infura.io/v3' , 2, 'testnet', '${Moment.getCurrent()}', '${Moment.getCurrent()}');
        `,(error, result)=>{

            if (error) return console.log(error)
            
            console.log(`✅ seeder table ${this.table_name} berhasil\n`)
        } )
    }

}