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