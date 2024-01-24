import { UserMigration } from "./user_migrations"
import db from '../database'
import { StatusMigration } from "./status_migrations"
import { BlockchainMigration } from "./blockchain_migrations"
import { WalletMigration } from "./wallet_migrations"

function main(){
    const database = 'wallet_api_db'
    
    // createDatabase(database)
    StatusMigration.migrate()
    UserMigration.migrate()
    BlockchainMigration.migrate()
    WalletMigration.migrate()

    db.end()

}
main()
function createDatabase(database:string){
    db.query(`CREATE DATABASE IF NOT EXISTS ${database}`)
}
