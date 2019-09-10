// STEP 1: Install and Require Faker
// // Install Faker via command line:

// npm install faker 

// // Require it inside of a JS file:

// var faker = require('faker'); 

// STEP 2: Use Faker!
// // Print a random email

// console.log(faker.internet.email()); 

// // Print a random past date

// console.log(faker.date.past()); 

// // Print a random city

// console.log(faker.address.city()); 

// // We can define a new function

// function generateAddress(){
//   console.log(faker.address.streetAddress());
//   console.log(faker.address.city());
//   console.log(faker.address.state());
// }
// // And then execute that function:

// generateAddress(); 


//var faker = require('faker');
var mysql = require('mysql');

// for (var i=0; i < 10; i++) {
//     var randomName = faker.name.findName(); // Rowan Nikolaus
//     var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
//     var randomCard = faker.helpers.createCard(); // random contact card containing many properties

//     console.log( randomName + ', ' + randomEmail + ', date created: ' + faker.date.past() );
// }

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'winter',
    database: 'ig_clone'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('connected');
});

var q = 'SELECT COUNT(*) AS total FROM users';
conn.query(q, (error, result) => {
    if(error) throw error;
    console.log(result[0].total);
    console.log(result);
});

var q = 'SELECT CURDATE()';
conn.query(q, (error, result) => {
    if(error) throw error;
    console.log(result);
});
