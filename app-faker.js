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

var faker = require('faker');

for (var i=0; i < 10; i++) {
    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties

    console.log( randomName + ', ' + randomEmail + ', date created: ' + faker.date.past() );
}

