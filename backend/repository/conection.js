import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '59222502',
    database: 'todolist'
})

console.log("BD conectado")
export default connection