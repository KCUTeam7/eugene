////////////// 1. Variables
// // console.log('Hello World');

// var person = 'John';
// console.log(person);
// person = 'Nick';
// console.log(person);

// var firstName = 'Bob';

// let age = 30;
// console.log(age);
// age = 35;
// console.log(age);

// const city = 'London';
// console.log(city);
// // city = 'Rome';
// // console.log(city);

////////////// 2. Datatypes

// const str = 'John is a developer';
// console.log(str);
// console.log(typeof str);

// const num = 30;
// console.log(num);
// console.log(typeof num);

// const num1 = 10;
// const num2 = 30;
// const bool = true;
// console.log(typeof bool);

// let a;
// console.log(a);
// console.log(typeof a);

////////////// 3. Operators
// const a = 5 + 5;
// console.log(a);

// const num1 = 10;
// const num2 = "10";
// console.log(num1 == num2); // true
// console.log(num1 === num2); // false

////////////// 4. Type Coercion
// const a = 10 + "20";
// console.log(a);

// const b = 'Hello ' + 'there';
// console.log(b);

// const c = 10 + 15 + 'a'; // returns '25a'
// c = 'a' + 10 + 15; // returns 'a1015'
// console.log(c); 

// console.log(5 === 5 === 5) // returns false because it compares true === 5


////////////// 5. Conditional Statements
// const kid = 'Alexis';
// const gender = 'male';

// if (gender === 'male'){
//     console.log(kid + ' is my son');
// }
// else{
//     console.log(kid + ' is my daughter');
// }

// const prof = 'instructor';

// if (prof === 'instructor'){
//     console.log(prof + ' teaches students');
// } else if (prof === 'composer'){
//     console.log(prof + ' creates music');
// } else{
//     console.log('Professions do not match');
// }

// if (5 === 5 && 4 === 4){
//     console.log('Condition is true');
// } else{
//     console.log('Condition is false');
// }

////////////// 6. Functions
// function passExam(name, score){ // parameters
//     const passUni = 71;
//     const passColl = 51;
    
//     if (score >= passUni){
//         console.log(name + 'enrolled at the University with ' + score + ' points');
//     }
//     else if(score >= passColl){
//         console.log(name + 'enrolled at the College with ' + score + ' points');
//     } else{
//         console.log(name + ' failed');
//     }
// }

// passExam('Bob', calcScore(45, 32)); // arguments
// passExam('Ann', 75);
// passExam('Nick', 45);

// function calcScore(quizScore, assayScore){
//     const score = quizScore + assayScore;

//     return score;
// }

////////////// 7. Arrow Functions
// const multiply = (x, y) => x*y;
// const oneparam = x => x*10; // don't use brackets when using one parameter
// const noparam = () => 5*10; // don't use brackets when using no parameter

// console.log(multiply(10, 5));

////////////// 8. Arrays
// const arr = ['Ann', 'Bob', 'John', 10, true, [1, 2, 3]];
// console.log(arr);
// console.log(arr[5][1]);

// const color = ['white', 'black', 'red'];
// colors[1] = 'green';
// colors.push('blue'); // add blue at the end of array
// colors.pop();
// colors.shift();
// colors.unshift('purple');
// console.log(colors.indexOf('yellow'));

// console.log(colors);

////////////// 9. Objects
// const person = {
//     myFunc() {
//         console.log('Hi there');
//     }
// };
// person.myFunc();
// person.firstname = 'John';      // property called firstname
// person['lastname'] = 'Smith';   // declare another property lastname
// person.son = {
//     name: 'Nick'
// };
// person.son.age = 5;

// console.log(person);
// console.log(person.firstname);

////////////// 10. Loops
// const arr = ['John', 'Nick', 'Bob', 'Michael', 'Mary'];
// for(let i=0; i<5; i++){
//     // console.log(arr[i]);
//     if (arr[i] === 'Bob'){
//         console.log(arr[i] + ' is my brother');
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// let i=0;
// // while(i <= 10){
// //     i++;
// //     console.log(i);
// // }
// 
// do {
//     console.log(i);
//     i++;
// }
// while (i > 10);

////////////// 11. Template Strings
const name = 'John';
let age = 29;
let profession = 'instructor';

function personES5(){
    console.log('My name is ' + name + ' I am ' + age + ' years old and I am an ' + profession);
}

personES5();

function personES6(){
    // use backticks ``
    console.log(`My name is ${name} I am ${age} years old and I am an ${profession}`);
}

personES6();