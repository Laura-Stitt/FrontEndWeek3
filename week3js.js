var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);


let firstAge = ages[0];
let lastAge = ages[ages.length - 1];

console.log(lastAge - firstAge);

ages.push(78);
console.log(ages);

console.log(lastAge - firstAge);
// function subtractAge(){ 
    
//     return lastAge - firstAge;
// }
// console.log(subtractAge(firstAge, lastAge));

