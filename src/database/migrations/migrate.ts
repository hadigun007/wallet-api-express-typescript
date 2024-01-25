import { UserMigration } from "./user_migrations"
import db from '../database'
import { StatusMigration } from "./status_migrations"
import { BlockchainMigration } from "./blockchain_migrations"
import { WalletMigration } from "./wallet_migrations"
import { Bip39Migrations } from "./bip39_migrations"

function main(){
    
    StatusMigration.migrate() // 1 ✅
    Bip39Migrations.migrate() // 2 ✅
    BlockchainMigration.migrate() // 3 ✅
    UserMigration.migrate() // 4 ✅
    WalletMigration.migrate() // 5 ✅

    db.end()

}
main()
