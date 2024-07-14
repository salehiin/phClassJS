// multi label condition module 17.5
// HW - grading 80+ Golden A, 70+ A, 60+ A- & so on
// HW - BMI calculator

const price = 3000;

if(price>=5000){
    //10% discount
    const discount = price * 10/100;
    const payAmount = price - discount;
    // console.log(payAmount, discount);
}
else if(price>2500){
    //5% discount
    const discount = price * 5/100;
    const payAmount = price - discount;
    // console.log(payAmount, discount);
}
else{
    // console.log(price)
}

const age = 47;
const fare = 500;

if(age <= 12){
    console.log('Ride free');
}
else if(age >= 60){
    // 10% discount
    const discount = fare * 10/100;
    const payAmount = fare - discount;
    console.log(payAmount)
}
else if(age >= 50){
    //5% discount
    const discount = fare * 5/100;
    const payAmount = fare - discount;
    console.log(payAmount)

}
else if(age >= 40){
    //2.5% discount
    const discount = fare * 2.5/100;
    const payAmount = fare - discount;
    console.log(payAmount)

}
else{
    console.log(fare)
}

// nested if else condition module 17.6

const money = 3000
if(money > 3000){
    console.log('Can go Coxs');
}
else{
    if(money > 2000){
        console.log('Can go Sylhet')
    }
    else{
        if(money > 1000){
            console.log('Can go Gazipur')
        }
        else{
            console.log('Stay at home')
        }
    }
}

// if else shorthand ternary module 17.7

amount = 3500;
amount >= 3000 ? console.log('Coxs') : console.log('Stay Home')

//2nd example

land = 500;
const isLeader = true;

if(isLeader === true){
    land = 0;
}
else{
    land = land + 100;
}

land = isLeader === true ? 0 : land + 100; //important 07:30

//Optional ternary
land = isLeader === true ? land > 1000 ? land/2 : 0 : land + 100; //important (have to clear) 10:00

// HW 17.9 P-Hero github - JS-conditionals-tasks (https://github.com/ProgrammingHero1/JS-conditionals-tasks)
// read - Making decisions in your code - (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)


// array module 17.5-2

const numbers = [1, 5, 66, 11, 45, 65];
console.log(numbers.length);
console.log(numbers[2]);

const third = numbers[3];
console.log(third);

numbers[0] = 3;
console.log(numbers)

// array module 17.5-3
//add element push or unshift
//remove element pop or shift

numbers.push(69, 73);
numbers.pop();
const out1 = numbers.pop(); //08:00 important


// array module 17.5-4


console.log(numbers.includes(66));

if(numbers.includes(66)){
    console.log(10+66)
}
else{
    console.log(0)
}

console.log(numbers.indexOf(66));
console.log(numbers.indexOf(63)); //result will be -1 means it isn't in array
console.log(Array.isArray(numbers));

//  + to join or , will use
//  | to seat besides
//  array1.concat(array2); - to join 2 array
//  array.slice(2, 4) - to slice an array - 2, 3

//HW  -  js-array-tasks (https://github.com/ProgrammingHero1/js-array-tasks)

// switch statement 17.5 - bonus

const dayOfWeek = 3;

switch(dayOfWeek){
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    case 3:
        console.log("Monday");
        break;
    case 4:
        console.log("Tuesday");
        break;
    case 5:
        console.log("Wednesday");
        break;
    case 6:
        console.log("Thursday");
        break;
    case 7:
        console.log("Friday");
        break;
        default:
            console.log("Invalid day")
}

// important 09:00
// important to do 10:00
// important 15:20
// HW  19:00

// Bonus module has 3 text blog - have to read

