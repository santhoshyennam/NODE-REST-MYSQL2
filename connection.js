require('dotenv').config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.db_username,
    password: process.env.db_password,
    database: "metiz"
});

module.exports = connection;