    // console.log('my name is sasuke');
    
    // console.log('Temitope is my Friend');
    // alert('How was class today?');
    // console.log(5 ** 5);

    // values and variables
//     console.log('Adams'); // string "adam", "55"
//     console.log(55);         num 55
//     console.log(55 - 20);    
//     console.log(true);     booleans true or false
//     console.log(false);

// camelCase 
// PascalCase
//var , const, let
// let firstName = "Adams" //this means declaring a variable
// let num1= 50;
// let first_name="Adams";
// let LastName = "Abdul"
// let $num_1 = 28;
// let last_name = "Kareema";
// let firstNamePerson = "Kareema";
// // let age = 20;
// // let city = "Lagos"
// let year20420 = "Covid Year"
// let year_2023= "Election Year"
// let $num2 = 34
// let -naame = "goal"

// // javascript keywords
// // new, function, if, while, else, or nand, 

// let person = 'Tope'
// let firstName = " Kwame";
// let lastName = "Mensah";
// let country = "Ghana";
// let city = "Kumasi";
// let age = 50;
// let isMarried = "true";

// console.log(firstName);
// console.log(lastName);
// console.log(country);
// console.log(city);
// console.log(age);
// console.log(isMarried);
 
// console.log(firstName, lastName, country, city, age, isMarried); // we can just write it this way instead of typing them out one by one 

// let gravity = 9.81;
// const boilingPoint = 100; 
// console.log(gravity, boilingPoint);


// comment types: single line commenting and multiple line commenting. This particular comment is a single line comment.
/** this 
 * is an
 * example of 
 * a 
 * multiple line comment
*/
/** 
//let is used for declaring a variable for 
let age = 20; //declaring a variale
console.log(age);

let noOfChildren;
noOfChildren = 5;
console.log(noOfChildren);

let fruit = "Mango";
console.log(fruit);

fruit="Apple";
console.log(fruit);

//const used for variable that cannot be reassigned, i.e the variable it is used for is immutable

const city ="Nairobi"
console.log(city);

const yearOfBirth = 2000;
console.log(yearOfBirth);
const pi = 3.142;

//var
var course = "javascript";
course = "python"
console.log(course);

//Data types: we have primitive and non-primitive data types, objects are the only non-primitive data types.Primitive are the most basic built-in values in javascript

// all numbers are called floating point numbers 
// we also have strings 
const a = "A"
const b = "javascript is an amazing language";
const yes = true;
const no = false;
console.log(yes);
console.log(no);



//array


//undefined
lastName = [""]
console.log(lastName);
//object
const myObject = {
    firstName: 'Anointing',
    LastName: 'Chidi',
    age:26,
    gender:'female'
}
*/
// // console.log(6<4);
// const listOfFruits = ["image", "apple", "grapes"];
// console.log(listOfFruits);

// let a = 10;
// let b = 8;
// let c = a*b;
// console.log(c);
// const sellingPrice = 700;
// const costPrice = 500;
// const profitValue = sellingPrice * costPrice;
// console.log(profitValue);
// let squareoffive = 5%6;
// console.log(squareoffive);
// //calculating the area of a circle
// //pi * radius * radius;

// const pi = 3.14;
// let radius = 100;
// const areaOfCircle = pi * radius * radius;
// console.log(areaOfCircle);

// // console.log(c.profitValue. areaOfCirlce);
// let x = 5;
// let y = 4; 
// let z = 10;
// console.log(2 / x);
// console.log(x%y)
// console.log(z % y);

//string configuration

//3. comparison operators 
// const ageAdult = 18;
// let ageJohn = 20;
// let ageBisi = 22;
// let ageBoolean = ageJohn > ageBisi; //this reaults to boolean 
// console.log(ageBoolean);

// console.log(ageJohn >= ageAdult);
// console.log(ageJohn > 18);

// ageBisi = 19;
// console.log(ageBisi >=18);

// let q = 3;
// let p = "3";

// console.log(q == p);//loose equality
// console.log(q === p);// strict equality                   

//4. Logical Operator
// && ampersand or AND
// || ORpipe 
// ! NOT

// comparison operator && comparison operator
// < && > The two compared statements have to be true for it to return true

// let personAge_1 = 20
// if (personAge_1 < 18 && personAge_1 <38){
//     console.log("Old");
// }
// let booleanvalue = personAge_1 > 18 && personAge_1 <38
// // console.log(booleanvalue);

// // || OR turns out false only if one of them is false
// if (4 > 3 || 10 > 5){
//     console.log("Old");
// }
 
//  console.log(4 > 3 || 10 > 5);

//  //NOT


//  //Uneray operator
//  // ++ increment
//  // post increment & pre increment
//  let countInc = 1; 
 //count = count + 1;

 // countInc++; //2
//  console.log(countInc++);

//  ++countInc; // +1 =2
//  console.log(++countInc);//3
//  // decrement
//  let countDec = 2;
//  //countDec = countDec -1;
//  countDec--;
//  //console.log(countDec);

//  //Tenary Operator ? condition : if the condition is true the one after the column will run
//  let age = 70;
//  age < 10 ? console.log("Adult") : console.log("Minor");
//  // strings and template literals
//  const firstName = "Kwame";
//  const lastName = "Mensah";
//  const country = "Ghana";
//  const city = "Kumasi";
//  const birthYear = 2005;
//  const thisYear =  2025;
//  const isMarried = true;
//  const job = "footballer";

//  const aboutKwame = "I am" + " " + firstName + " " + lastName;
//  console.log(aboutKwame);
//  // ${}
//  const aboutMensah = `I am ${firstName} ${lastName}, a ${thisYear - birthYear} years old ${job}`


// if else statements

// if(undefined){
//     //falsy
//     console.log(num + "is a positive number", "code 2");
// }

// let isRaining = false;
// if (isRaining){
//     console.log("Remember to take your coat");
// } else{
//     console.log("You have a nice day!");
// };

// const age = 10;
// const isOldEnough = age >= 18;
// // const x = isOldEnough - age
// if (isOldEnough) {
//     console.log("you can have a driver's license");
// } else {
//     console.log(`You cannot have a driver's license yet, you still have ${18 - age} year(s) left.`);
// }

// const birthYear = 2000;
// let baby;
// console.log(baby)

// if (birthYear >= 2008){
//    baby = "Gen Z";
//     console.log(`You are a ${baby} baby`);
// } else{
//     baby = "Millennial";
//     console.log("You are a Millennial");
// }
// console.log(baby);
// c. else-if statement
// let score = 60;
// //possible conditions 
// //1. 0 - 39 --> F
// // 2. 40 - 49 --> D
// // 3. 50 - 59 --> C 
// // 4. 60 - 69 --> B
// //5. 70 - 100 -->A

// if (score >= 0 && score <= 39){
//     console.log("Grade: F");
// } else if (score >= 40 && score <= 49){
//     console.log("Grade D");
// } else if (score >= 50 && score <= 59){
//     console.log("Grade: C");
// } else if (score >= 60 && score <= 69){
//     console.log("Grade: B")
// } else if (score >= 70 && score <= 100){
//     console.log("Grade: A")
// } else {
//     console.log("Invalid input");
// }

// let a = prompt("Enter a number:")
// let b = prompt("Enter another number:");

// let c = a + b;
// console.log(c);

// // Write a code which can give grades to students according to theirs scores:
// // 80-100, A
// // 70-89, B
// // 60-69, C
// // 50-59, D
// // 0-49, F
// // Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// // September, October or November, the season is Autumn.
// // December, January or February, the season is Winter.
// // March, April or May, the season is Spring
// // June, July or August, the season is Summer

// //Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// //1. Store Mark's and John's mass and height in variables
// //2. Calculate both their BMIs using the formula
// //3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// // //TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tal

// let Name = prompt("Enter your name:");
// if (Name === "Billy" || Name === "Ann"){
//     console.log("Welcome");
// }else {
//     console.log("Access denied")
// }
// let fName  =  prompt("Enter your  name:");
// let ageInput = prompt("Enter your age:");
// let age  = Number(ageInput);
// if (!isNaN(age) && age ==  18){
//     console.log(`Welcome to the movie  site ${fName}`);
// } else if (age >= 18){
//     console.log(`Welcome to the site ${fName}`);
// } else {
//     console.log('Not up to the age');
// }
//Note that if the line 324 i mean the line that has !isNaN(age)is'nt there the code will still work fine but the user won't know what exactly they did wrong, which makes it neccessary
//Question 1
// Declare a variable myAge and assign it a number
// Ask the user for their age using prompt() and compare it 
//Output  who is older and by how many years
//Bonus:
//Can you detect if the output is a number?
// // what if someone enters nothing as a name?

// let myAge = 20;
// let userAge = prompt("Enter your age");
// let userAgeInput = Number(userAge);

// if (isNaN(userAgeInput)){
//     console.log("Age must be a number");
// } else if(myAge = userAgeInput){
//     console.log("We are age mates")
// } else if (myAge > userAgeInput){
//     console.log(`I am older than you by ${myAge - userAgeInput} years`);
// }else if (myAge < userAgeInput){
//     console.log(`You are older than me by ${userAgeInput - myAge} years`);
// };

//Question 3
//Ask the user to enter a number;
// Check if the number is even or odd using the modulus (%) operator;
//Display the result accordingly;
//Write a script that checks if a number is even or odd;

// let number = prompt("Enter a number:");

// if (number % 2 === 0){
//     console.log(number + "is an even number")
// }else{
//     console.log(number + "is an odd number")
// };


// Question 4: Determine the Season
// Create a variable called month and assign it a string value representing a month (e.g., "October").
// Write a script to determine and display the season based on the month.
// Seasons:
// 	•	Autumn: September, October, November
// 	•	Winter: December, January, February
// 	•	Spring: March, April, May
// 	•	Summer: June, July, August

// let month = prompt("Enter a month:");
// let capitalOfMonth = month.toLowerCase.trim();

// if (
//     capitalOfMonth == "december" ||
//     capitalOfMonth == "january"  ||
//     capitalOfMonth == "februrary"
// ){
//     console.log(`${capitalOfMonth} is in Winter`)
// } else if (
//     capitalOfMonth == "march" ||
//     capitalOfMonth == "april"  ||
//     capitalOfMonth == "may"
// ) {
//     console.log(`${capitalOfMonth} is in spring`);
// } else{

// }

// toUpperCase()

//Switch Statement

let weather = "Rainy";

// possible cases
//cloudy
//rainy
//windy
//sunny

switch (weather){
    case "cloudy":
    console.log("It might be cold, take your jacket with you.");
    break;

    case "rainy":
    console.log("You need a rain coat.");
    break;
    
    case "windy":
    console.log("It is going to be windy");

    case "sunny":
        console.log("It is going to be a hot day.");
        break;
    default:
        console.log("Just a normal day!");

}

let day = "saturday";
//monday
//tuesday
// wednesday
// thursday
// friday
// saturday
// sunday

switch (day){
    case "monday":
        console.log("Today is" + day.toUpperCase());
        break;
    case "tuesday":
        console.log("Today is" +day.toUpperCase());
        break;
    case "wednesday":
        console.log("Today is" + day.toUpperCase());
        break;
    case "thursday":
        console.log("Today is" + day.toUpperCase());
        break;
    case "friday":
        console.log("Today is" + day.toUpperCase());
        break;  
    default:
        console.log("input a valid day of the week");  
}

// switch an equivalent to if else statement 
//Tenary
// let isRaining = false;
// isRaining ? console.log("It is raining") : console.log("It is NOT raining");
//num > 0 
//?console.log("Number is a positive number")
// ?num === 0
// ? console.log("Number is zero");
// ?num = 0 
// 




 // ?console.log("Number is a negative ")
// Write a program which tells the number of days in a month.
//  Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
// Write a program which tells the number of days in a month, now consider leap year.

for(let x = 0; x = 100; x++){
    console.log(x);
}

// print out number 1-5 with the console.log() function
for (let i = 1; i<6; i++){
  console.log(`Number: ${i}`);
}
//I'm actually very lost right now i will just continue from where i met the class


//Array
let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "orange";
console.log(fruit2);

let fruit = ["apple", "banana", "orange", "grape"];




console.log(fruit);
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);

//console.log("N")
const numbers = [1, 2, 3, 4, 5]

function sumOfArray(array) {
    for(let i = 0; i <= array.length-1; i++){
      sum = sum + array[i];
    }
    return sum;
} // if this function is called before it like on any line before it is even named, it is going to return, unlike the rest of the types of the functions like arrow functions, and the likes.
console.log(sumOfArray(numbers));// this will give 15 which is the result of adding up the values in the array named "numbers"

const daysOfTheweek = [1, 2, 3, 4, 5, 6, 7]
console.log(sumOfArray(daysOfTheweek)); 

// function with parameters
function printfullName (firstName, lastName, age){
    let fullName = `I am ${lastName} ${firstName} and I am ${age} years old`
    return fullName; // in this function, if the age is not provided for example, the default will be printed instead. e.g printfullName(firstName, lastName, age= 20)l here, 20 will be printed instead if the value of age is not specified
};

function greetUser (name = "User"){
    console.log("Hello, " + name + "Welcome to today's class");
}
greetUser("Tope"); // here Tope will be printed since it has been specified, ad it been it wasn't specified, User will be printed instead

function calcBirthAge (birthYear, currentYear = 2025 ){
    let age = currentYear - birthYear;
    return age;
}
console.log(calcBirthAge(2000));

//Scope and hoisting
// we  have global scope and local scope

const sum = 90 + 70;
console.log(sum);// global scope, it can be accessed anywhere in the script

function showGlobal () {
    const globalSum = 90 + 20;// this has a local scope
    console.log(globalSum);
}


//Example
// Greet based on time
function greetUser (name, hr){
   if(hr >= 6){
     return `Good morning ${name}`
   } else if (hr = 6){
     return `Good afternoon ${time}`
   } else {

   }
};
greetUser("Karl", 2);
 
//closure