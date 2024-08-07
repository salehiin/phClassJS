// very important full module - have to do again

// 20.1 - function

// declare a function
function doSomething(){
    console.log('Basic function declare')
}

// call the function
doSomething();

// variable, condition, array, object, loop, function - important JS

// 20.2 - parameter

// 06:40 - very important

function square(number){  //parameter of the function - parameter can't access outside of the function
    const borgo = number * number;  // mechanism of this function
    console.log('Square of given number: ', borgo)  // result of the function
}
square(4); // call the function
square(9);

// 20.3

let digit = 8;
square(digit);

function difference(num1, num2){
    const diff = num1 - num2;
    console.log('Difference of two numbers is: ', diff)
}
difference(2, 2)
const elder = 22;
const younger = 11;
difference(elder, younger)

// 20.4 - return

function tenTimes(number){
    const result = number * 10;
    return result;
    OR
    // return number * 10;
}

function cutHalf(number){
    const half = number / 2;
    return half;
}

// tenTimes(5);

const output = tenTimes(5);
console.log(output);

// 08:25 very important
// if Return after call the function then it can stored in a variable

function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
}

const result = doMath(10, 5)
console.log(result);

function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(5));
console.log(isEven(105));

function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;
}
console.log(isOdd(10));
console.log(isOdd(7));

// function declare, parameter set, return

// 20.6 Different parameters - number, boolean, array, object


function evenSizedString(str){
    const size = str.length;
    console.log(size);
    if(size % 2 === 0){
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size')
        return false;
    }
}
// evenSizedString('Dhaka')

// have to do remaining part

// 20.7 - have to watch several times

/**
 * Objective:
 * step-1: declare a function
 * step-2: call check whether the function is called properly 
 * step-3: set a parameter(s)
 * step-4: pass the parameter(s), check whether parameter is passed ina proper format
 * step-5: do the function tasks(step by step)
 * 
 */ 

function sumOfNumbers(numbers){
    // return
    let sum = 0;
    for(const number of numbers){
        console.log(number)
        sum = sum + number;
    }
    return sum;
}

const numbs = [54, 62, 12, 6]
const sum = sumOfNumbers(numbs);
console.log('Sum of numbers is', sum);

// 20.8

function evenNumbersOnly(numbers){
    const evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number)
            evens.push(number);
        }
        // console.log(number);
    }
    return evens;
    
}

const numbers = [5, 8, 91, 24, 6];
// const evens = evenNumbersOnly(numbers);
// console.log('even numbers are', evens)

// 20.9

// HW - in video, js-function-practice-tasks


function add(a, b){
   const result = a + b;
    // console.log(sum);
    return result;
}
const add12 = add(5, 6);
console.log(add12)

// Bonus video -- Recap and know more about objects - very important to clear concept

// parameter & arguments

function hello(myName){
    //return 'hello' + ' ' + myName
    return `Hello, ${myName} abcdefg`
}
//hello()
console.log(hello('abc'));
console.log(hello('abcdef'));
console.log(hello('abcdefghij'));

// optional chaining