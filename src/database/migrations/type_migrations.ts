import { Moment } from "../../util/moment"
import db from "../database"

export class TypesMigration {

    static table_name = 'types'

    static migrate() {

        db.query(`DROP TABLE IF EXISTS types;`, (error, result) => {
            if (error) return console.log(error)
        })

        db.query(`
        CREATE TABLE types (
            id INT PRIMARY KEY AUTO_INCREMENT,
            type_key VARCHAR(255) NOT NULL,
            type_id MEDIUMINT NOT NULL,
            type_name VARCHAR(255) UNIQUE NOT NULL,
            created_at datetime,
            updated_at datetime
            );`, (error, result) => {
            if (error) return console.log(error)
            console.log(`✅ migrate table ${this.table_name} berhasil`)
        })
        
        db.query(`
        INSERT INTO types
        (id, type_key, type_id, type_name, created_at, updated_at)
        VALUES 
        (1, 'transaction', 0, 'TRANSER IN', '${Moment.getCurrent()}', '${Moment.getCurrent()}'),
        (2, 'transaction', 1, 'TRANSFER OUT', '${Moment.getCurrent()}', '${Moment.getCurrent()}');
        `,(error, result)=>{

            if (error) return console.log(error)
            
            console.log(`✅ seeder table ${this.table_name} berhasil\n`)
        } )
    }

}