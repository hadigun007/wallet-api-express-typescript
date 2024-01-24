import { UserMigration } from "./user_migrations"
import db from '../database'
import { StatusMigration } from "./status_migrations"
import { BlockchainMigration } from "./blockchain_migrations"
import { WalletMigration } from "./wallet_migrations"
import { Bip39Migrations } from "./bip39_migrations"

function main(){
    
    StatusMigration.migrate()
    UserMigration.migrate()
    BlockchainMigration.migrate()
    Bip39Migrations.migrate()
    WalletMigration.migrate()

    db.end()

}
main()
