//19-1 05:00 important

//String is immutable - not changeable
//Array is mutable - can change Array elements

// 19-2
// all lower or upper case
const school = 'RAJ UK Uttara Model School';

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());


// manage white space
const drink =' water';
const liquid = 'water';

if(drink.trim() === liquid.trim()){
    console.log('pani khai')
}
else{
    console.log('pari na')
}

// 19-3

const address = 'andorkilla';
const part = address.slice(2, 5);
console.log(part);

const sentence = 'i am good and hard working';
console.log(sentence.split(' '));
console.log(sentence.split('a'));

const sentenceJoin = ['am', 'good', 'and', 'hard', 'working'];
console.log(sentenceJoin.join());
console.log(sentenceJoin.join('-'));


const first = 'Abid';
const last = 'Navid';
// const fullName = first + last;
const fullName = first + ' ' + last;
console.log(fullName);

const fullName2 = first.concat(' ').concat(last);
console.log(fullName2);

//includes
console.log(last.includes('x'))



// 19.4 - Reverse string
const sentense = 'i am learning web dev'

let reverse = '';
for(const letter of sentense){
    //console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);

let rev = '';
for(let i = 0; i < sentense.length; i++){
    // console.log(i);
    // console.log(sentense[i]);
    const letter = sentense[i];
    rev = letter + rev;
}
console.log(rev);

//shortcut
const reversed = sentense.split('').reverse().join('');
console.log(reversed);

// 19.5

// objects are non-primitive data type
// other data types are primitive/primary/basic data type

const bottle ={
    brand: 'apple',
    price: 45,
    color: 'transparent',
    isClean: false,
    'neck height': 3 //dot notation will not work in this case use bracket notation
}

const subject = {
    name: 'bi'
}

// 19.6 - 09:10

// dot notation
console.log(bottle.brand);
const amount = bottle.price;
console.log(amount)

// bracket notation
console.log(bottle['color'])
const company = bottle['brand']
console.log(company)
console.log(bottle["neck height"])

bottle.price = 55;
bottle['color'] = 'green';
console.log(bottle)

const rate = 'price';
const value = 'price';
bottle[value] = 66;
// console.log(bottle[rate]);
console.log(bottle)

// can access & set dot or bracket notation

// 19.7

const container_keys = Object.keys(bottle); // to find all keys in a object
const container_values = Object.values(bottle); // to find all values in a object
console.log(container_keys)
console.log(container_values)

// nested object

const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

console.log(college.name)
// college.unique.result.merit = 'top most'
console.log(college.unique.result.merit)
// OR
console.log(college['unique'].result.merit)

// college.events[1] = '16 december'
console.log(college.events[1])

console.log(college.name)
delete college.class; //how to delete a property from an object
console.log(college.name)

// 19.8 - very important to see several times
const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

//for of: in array
//for in: in object
for(const prop in mobile){
    // console.log(prop)
    // console.log(mobile[prop])
}

const keys = Object.keys(mobile);
// console.log(keys);

for(const key of keys){
    console.log(key,':', mobile[key])
    console.log(mobile[key])
}

const pen = { brand: 'econo', price: 10, color: 'black' } // object literal
const pencil = new Object()
console.log(pencil)
const rubber = Object.create({})
console.log(rubber)

// 19.9

// Array maintain sequence/order/index but Object doesn't

//03:30 - very important
//04:00 - very important

Object.keys(mobile);  // to find all keys
Object.values(mobile); // to find all values

// HW - js-object-tasks - /ProgrammingHero1 - repo
// HW - js-string-tasks - /ProgrammingHero1 - repo