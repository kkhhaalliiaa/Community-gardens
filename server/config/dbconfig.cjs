require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.getConnection((error, connection) => {
    if (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
    console.log("Database connected successfully.");
    connection.release();
});

module.exports = connection;
