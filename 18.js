// loop (for of) module 18.1


const numbers = [3, 6, 9, 12, 15, 18]

for(const num of numbers){
    // console.log(num)
}

// loop (while of) module 18.2

//Code debugging 01:45

let num = 0;  // very important concept 09:10 - not const should let
while(num<5){
    console.log(num);
    // num = num + 1;
    // num += 1;
    num++;
}


// loop (while of) problem solving module 18.3
// 05:20
let num1 = 1;  // should practice
let sum1 = 0;
while(num1<=10){
    console.log(num1);
    sum1 = sum1 + num1;
    console.log('Sum:', sum1);
    num1++;
}

let num2 = 1;  // should practice

while(num2<=10){
    console.log(num2);
    if(num2 % 2 === 0){
        console.log('even number', num2)
    }
    num2++;
}

//HW - https://github.com/ProgrammingHero1/js-loop-tasks

// loop (for) problem solving module 18.4

for(let num3 = 0; num3 < 5; num3++){
    console.log(num3)
}

// loop (for) problem solving module 18.5

// 02:00 - very important

let sum2 = 0;

for(let i = 11; i <= 20; i++){
    sum2 = sum2 + i;
    console.log(i);
}
console.log('Sum of numbers from 11 to 20 is', sum2)

//decremental for & while loop

for (let i = 10; i >= 0; i--){
    console.log(i);
}

let n = 10;
while(n >= 0){
    console.log(n);
    n--;
}


// loop different ways module 18.6

// (2/n = 0) or (2/n = !1) same
// (2/n = 1) or (2/n = !0) same

for(let i = 0; i < 20; i++){
    if(i%2===1){
        console.log(i)
    }
}

// OR same

for(let i = 0; i < 20; i++){
    if(i%2!===0){
        console.log(i)
    }
}

// OR same

for(let i = 0; i < 20; i+=2){
    
        console.log(i)
    
}

//Another example

for(let i = 1; i < 30; i++){
    if(i%3===0 || i%5===0){
        console.log(i)
    }
}

//give me the sum of numbers from 1 to 20 that are divisible by 3

let total = 0;
for(let i = 1; i <= 20; i++){
    if(i%3===0){
        console.log(i)
        total = total+i;
        console.log('total in every step', total)
    }
}
console.log('total of the numbers', total)

// break & continue 18.7
// continue --> skip this iteration.
// break --> i am done with this loop. loop end.


for(let i = 0; i <= 20; i++){
    console.log(i);
    if(i >= 10){
        break
    }
}

//Another
let n = 54;
while(n>50){
    console.log(n);
    n--;
}

//
let n = 54;
while(n>50){
    console.log(n);
    if(n<50){
        break;
    }
    n--;
}

//continue with for - should check by run often
for(let i = 0; i <= 20; i++){
    
    if(i % 2 === 1){
        continue
    }
    console.log(i);
}

//continue with while - should check by run often

let n = 0;             // have to do again - not clear
while(n < 15){
    n++;
    if(n % 5 !== 0){
        continue;
    }
    console.log(n);
   
}

// do while loop 18.7 - first done then check

let n = 0;
do{
    console.log(n);
    n++;
}
while(n < 5)


// 18.9 should listen often for concept    
//HW - https://github.com/ProgrammingHero1/js-loop-tasks