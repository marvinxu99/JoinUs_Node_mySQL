var mysql = require('mysql');
var faker = require('faker');

var db_conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'winter',
    database: 'join_us_app'
});

db_conn.connect((err) => {
    if (err) throw err;
    console.log('connected');
});

//Selecting data
// var q = 'SELECT COUNT(*) AS total FROM users';
// db_conn.query(q, (error, results) => {
//     if(error) throw error;
//     console.log(results[0].total);
//     console.log(results);
// });

//Inserting data
// var q2 = 'INSERT INTO users (email) VALUES ("wyatt_the_dog@yahoo.com")';
// db_conn.query(q2, (error, results, fields) => {
//     if(error) throw error;
//     console.log(results);
// });

// Inserting data take 2
// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };
// var q2 = 'INSERT INTO users SET ?';
// var end_result = db_conn.query(q2, person,  (error, results) => {
//     if(error) throw error;
//     console.log(results);
// });

// console.log("end_resul = " + end_result.sql);


// Inserting data take 3
var persons = [];
for (var i=0; i<500; i++) {
    persons.push([
        faker.internet.email(),
        faker.date.past()
    ]);
};

var q2 = 'INSERT INTO users (email, created_at) VALUES ?';
db_conn.query(q2, [persons],  (error, results) => {
    if(error) throw error;
    console.log(results);
});

db_conn.end();