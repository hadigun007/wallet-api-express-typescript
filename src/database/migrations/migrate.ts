import { UserMigration } from "./user_migrations"
import db from '../database'
import { StatusMigration } from "./status_migrations"
import { BlockchainMigration } from "./blockchain_migrate"

function main(){
    StatusMigration.migrate()
    UserMigration.migrate()
    BlockchainMigration.migrate()
    db.end()

}
main()
