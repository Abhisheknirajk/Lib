//SLICE
const arr = ['a','b','c','d','e'];
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));

console.log(arr.slice(1,-2));
console.log(arr.slice());
console.log([...arr])

//Spice 

// console.log(arr.splice(2));
// console.log(arr)
// arr.splice(-1);
// console.log(arr);
// arr.splice(1,2)
// console.log(arr)

//REVERSE

const arr2 = ['j','i','h','g','f']
console.log(arr2);
console.log(arr2.reverse());
console.log(arr2)

//CONCATE 

const letters =  arr.concat(arr2);
console.log(letters);

console.log([...arr,...arr2]);

//JOIN

console.log(letters.join('-'));
