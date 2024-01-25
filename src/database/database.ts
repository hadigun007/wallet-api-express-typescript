import mysql from 'mysql2'
import dotenv from 'dotenv';
import config from '../../config.json'

dotenv.config();

var connection = mysql.createConnection({
    host: config.database.host,
    user: config.database.user.name,
    password:  config.database.user.password,
    database: config.database.database
});

connection.on('connect', () => {
    console.log('database connected opened')
})
connection.on('end', () => {
    console.log('database connected ended')
})

connection.connect()


export default connection