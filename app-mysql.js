
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'winter',
    database: 'ig_clone'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('connected');
});

let q = 'SELECT * FROM users order by id LIMIT 30';
conn.query(q, (error, results, fields) => {
    if(error) throw error;
    console.log('Number of rows:', results.length);
    console.log(results);
});

q = 'SELECT CURDATE()';
conn.query(q, (error, results, fields) => {
    if(error) throw error;
    console.log(results);
});

q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now'
conn.query(q, (error, results, fields) => {
    if(error) throw error;
    console.log("Number of rows:", results.length);
    console.log(results);
});

conn.end();