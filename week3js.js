var ages = [3, 9, 23, 64, 2, 8, 28, 93];

ages.push(78);

let firstAge = ages[0];
let lastAge = ages[ages.length - 1];

 function subtractAge(){ 
    
    return lastAge - firstAge;
 }
 console.log(subtractAge(firstAge, lastAge));

 let sum = ages.reduce(function (a, b) {
   return a + b;
 }, 0);
 console.log(sum / ages.length);

 var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
 var total = 0;
 for(let i = 0; i < names.length; i++) {
    total += names[i].length;
 }
 var averageNameLength = total / names.length;
 console.log(averageNameLength);

 console.log(names.join(' '));

 //to access last element in array: let lastElement = array[array.length - 1];
 //to access first element in array: let firstElement = array[0];

 let nameLengths = names.map(function(element) {
    return element.length;
 });
 console.log(nameLengths);
 let sumLengths = nameLengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
 });
 console.log(sumLengths);
 
 function trippleWord(word, n) {
      return 'word' * n;
 };

 function createFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
 };