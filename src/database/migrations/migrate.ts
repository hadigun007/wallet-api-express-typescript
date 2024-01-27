import { UserMigration } from "./user_migrations"
import db from '../database'
import { StatusMigration } from "./status_migrations"
import { BlockchainMigration } from "./blockchain_migrations"
import { WalletMigration } from "./wallet_migrations"
import { Bip39Migrations } from "./bip39_migrations"
import { TypesMigration } from "./type_migrations"
import { ProviderMigration } from "./provider_migrations"
import { TransactionMigration } from "./transaction_migrations"

function main(){
    
    StatusMigration.migrate() // 1 ✅
    Bip39Migrations.migrate() // 2 ✅
    BlockchainMigration.migrate() // 3 ✅
    UserMigration.migrate() // 4 ✅
    WalletMigration.migrate() // 5 ✅
    TypesMigration.migrate() // 6 ✅
    ProviderMigration.migrate() // 7 ✅
    TransactionMigration.migrate() // 8 ✅

    db.end()

}
main()
