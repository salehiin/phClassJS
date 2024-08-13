// 22.1

jim = 56;
tim = 86;
kim = 68;

const max = Math.max(12, 1, 5, 56, 99, 8)
console.log('Max is:', max)

// 22.2 - have to do again, don't clear

const heights = [65, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
        // console.log(num)
    }
    // console.log(numbers);
    return max;
}
const max2 = getMax(heights);
console.log('max value is', max2);

// HW - find min number

// 22.3  have to do again

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;
    
    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    
    return totalWood;
}
const wood = woodQuantity(1, 1, 4);
console.log('Wood needed', wood)


// HW - shirt-500, pant-300, shoe-900

// 22.4  have to do again

const prices = [ 20000, 16000, 50000, 100000, 12000, 30000, 35000]

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }        
            // console.log(num);
    }
    // console.log(numbers);
    return min;
}
const cheap = getMin(prices);
console.log('Cheapest one is: ', cheap);

// array of objects
const phones = [
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'}
]


// cheapest phone price

// HW - costliest phone price

// 24.5 have to do

const products = [
    {name: 'shampoo', price: 300},
    {name: 'shampoo', price: 300},
    {name: 'shampoo', price: 300},
    {name: 'shampoo', price: 300},
    {name: 'shampoo', price: 300}
]

function getShoppingTotal(products){

}

const total = getShoppingTotal(products);
console.log('total expenses: ', total);

// 22.6  have to do

// 22.7 have to do

// 22.8

function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number')
    const mult = num1 * num2;
    return mult;
}
const result = multiply(5, '7');
// console.log(result);
function fullName(first, second){
    if(typeof first !== 'string'){
        return 'First name should a string'
    }
    else if(typeof second !== 'string'){
        return 'Second name should a string'
    }
    const full = first + ' ' + second;
    return full;
}
const full = fullName('Zaiyaqn', 'Salehin');
console.log(full);

// Object - don't understand - have to do 

function getPrice(product){
    const price = product.price;
    return price;
}
const price = getPrice({name: 'Pen', price: 5, color: 'green'})

// 22.9
// Variable, Condition, Array, Loop, Object, Function

// HW - js-problems-part2-practice-tasks