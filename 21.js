// 21.1


// 21.2

function inchToFeet(inch){
 const feet = inch / 12;
 return feet;   
}
const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight);

// inch feet
function inchToFeet2(inch){
 const feetFraction = inch / 12;
 const feetNumber = parseInt(feetFraction);
 const inchRemaining = inch % 12;
 const result =  `${feetNumber} ft ${inchRemaining} inch`
 return result;   
}

const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2);

// miles to kilo 
// kilo to mile - 0.621371
function milesToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}


// 21.3

function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLipi = isLeapYear(2052);
console.log(isLipi);

// not divisible by 100 but divisible by 4
// divisible by 400
function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLeap = isLeapYear2(2100);
console.log(isLeap);

// 21.4

function oddAverage(numbers){
    // console.log(numbers)
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            // console.log(number)
            odds.push(number);
        }
    }
    // console.log(odds)
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg; 
}
const numbers = [42, 13, 58, 65, 81];
const avg = oddAverage(numbers);
console.log(`Average of the odd numbers is ${avg}`)

// 21.5

const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'dabul'];

function noDuplicate(array){
    // console.log(array);
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biryaniKhor);
console.log(uniqueArray);

//21.6

const min = Math.min(45, 1, 65, 99, 126)
console.log(min);
const max = Math.max(45, 1, 65, 99, 126)
console.log(max);

console.log(Math.PI)
console.log(Math.abs(-88))
console.log(Math.abs(5-88))
console.log(Math.round(4.8))
console.log(Math.round(4.2))
console.log(Math.floor(4.2))
console.log(Math.ceil(4.2))
console.log(Math.random())
console.log(Math.random()*10)
// const rand = Math.random()*10
const rand = Math.random(Math.random()*10)
console.log(rand)

// 21.7

const today = new Date();
const date = new Date('2062-10-09')
console.log(date.getMonth())
console.log(date.getDay())
const specificDate = new Date(2091, 0, 26)
console.log(specificDate)
specificDate.setMonth(10);
// console.log(specificDate);
// console.log(specificDate);
console.log(specificDate.toLocaleString());
console.log(specificDate.toLocaleString('en-GB'));

// 21.8
// from 1970 - unix epoc

let a = 5;
let b = 7;

console.log(a, b);
// a = b;
// b = a;

const temp = a;
a = b;
b = temp;
console.log(a, b);

// Destructuring


let x = 5;
let y = 7;

console.log(x, y)
[x, y] = [y, x];
console.log(x, y)

// bitwise manipulation

// 21.9
// 1. Variable
// 2. Condition.
// 3. Array.
// 4. Loop.
// 5. Object.
// 6. Function.

// HW - js-problems-part1-practice-tasks