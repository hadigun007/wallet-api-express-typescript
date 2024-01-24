import db from "../database"

export class UserMigration {

    static table_name = 'users'

    static migrate() {

        db.query(`DROP TABLE IF EXISTS users;`, (error, result) => {
            if (error) return console.log(error)
        })
        db.query(`
        CREATE TABLE users (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            verify_token VARCHAR(255),
            secret_key VARCHAR(255),
            otpauth_url VARCHAR(255),
            status_id INT NOT NULL,
            FOREIGN KEY (status_id) REFERENCES statuses(id),
            role VARCHAR(255) NOT NULL,
            created_at datetime,
            updated_at datetime

       );`, 
       (error, result) => {
            if (error) return console.log(error)
            console.log(`✅ migrate table ${this.table_name} berhasil`)
        })

        db.query(`
        INSERT INTO users
        (id, name, email, password, status_id, role)
        VALUES 
        (1, 'ROOT', 'root@mail.com', '$2a$10$3zoB8RuTA1JfVRCPgESWQuEGNdxqCqzX9K0KNbJHsF0iN04fVQp/y', 3, 'root');
        `,(error, result)=>{
            if (error) return console.log(error)
            console.log(`✅ seeder table ${this.table_name} berhasil\n`)
        } )
    }
}