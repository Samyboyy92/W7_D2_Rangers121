//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


for (let [key, value] of Object.entries(person3)) {
    if (Array.isArray(value)) {
        console.log(`${key}:`)
        value.forEach(value => console.log(value))
    } else {
        console.log(`${key}: ${value}`)
    }
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person4(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = function (){
        console.log(`This is ${this.name} and he is ${this.age} years old.`)
    }
}

Person4.prototype.addAge = (years) =>{
    this.age += years;
}
let person1 = new Person4('Sam', 30);
let person2 = new Person4('Shelton', 35);

person1.addAge(3);
person2.addAge(3);

person1.printInfo()
person2.printInfo()



// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function stringLength(str) {
    return new Promise((resolve, reject) =>{
        if (str.length >10){
            resolve('Big Word');
        } else {
            reject('Small Number');
        }
    });
}


/**
 * CodeWars Problem 1:
 * 
 * Description:
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples
reverseList([1,2,3,4]) == [4,3,2,1]
reverseList([3,1,5,4]) == [4,5,1,3]

 * Python Solution:
def reverse_list(l):
    return l[::-1]
 */

//JavaScript Solution:
function reverseList(list) {
    return list.reverse();
  }




/**
 * CodeWars Problem 2:
 * 
 * Description:
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically.

Good Luck!

 * Python Solution:
 * def convert_hash_to_array(hash):
    return sorted([[k, v] for k,v in hash.items()])
 */
//JavaScript Solution:
function convertHashToArray(hash) {
    const value = Object.values(hash);
    const key = Object.keys(hash);
    const arr = [];
    for (let i = 0; i < value.length; i++) {
      arr.push([key[i], value[i]]);
    }
    return arr.sort((a, b) => a[0] > b[0]);
  }