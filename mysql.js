
const mysql = require('mysql2');

// Define the RDS connection parameters
const connection = mysql.createConnection({
  host: 'database-1.c5ag0uqoqfuu.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: '12345678',
  database: 'inventorystore',
  port: 3306 // default is 3306 for MySQL
});

// Connect to the RDS instance
connection.connect((err) => {
  if (err) {
    console.error('Connection error', err);
  } else {
    console.log('Connected to RDS MySQL');
  }
});

const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            age INT
        )`;

connection.query(createTableQuery, (err, results) => {
    if (err) {
        console.error('Error creating table:', err);
    } else {
        console.log('Table "users" created successfully',results);
    }
});

const insertDataQuery = `
                INSERT INTO users (name, age)
                VALUES
                    ('Alice', 25),
                    ('Bob', 30),
                    ('Charlie', 35)
            `;
            connection.query(insertDataQuery, (err, results) => {
                if (err) {
                    console.error('Error inserting data:', err);
                } else {
                    console.log('Data inserted successfully');
                }
            }
        );

        const retrieveDataQuery = `
        SELECT * FROM users where id=5;
    `;
    connection.query(retrieveDataQuery, (err, results) => {
        if (err) {
            console.error('Error retrieving data:', err);
        } else {
            console.log('Retrieved data:', results);
        }

        // Close the connection
        connection.end();
    });




