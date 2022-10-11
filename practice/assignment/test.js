const X = require('./packageoftest/module1');
//const Y=require('./packageoftest/Assignment2');
const Z=require('./packageoftest/Assignment3');

const array = [2,33,23,14,5,20,11];

console.log("maximum of array=", X.maximum(array) );
console.log("minimum of array=", X.minimum(array));
console.log("avg of array=", X.avg(array));
console.log("sumof array=", X.sumof(array));

console.log("greater then 10=", Z.greater([11,2,4,55]));
console.log("less than 10=", Z.less([9,12,64,5,7]));
console.log("prime no=", Z.prime(12));
console.log("array of prime no.=", Z.prmArray([23,10,4,13]));
console.log("array of even no.=", Z.evenarray([1,2,3,4,5]));
console.log("array of odd no.=", Z.odarray([1,2,3,4,5]));
console.log("square of nos.=", Z.numsquare([2,4,5]));
console.log("square root of nos.", Z.root([4, 16, 25]));
console.log("palindrome of=", Z.palindrome("madam"));
console.log("reversing of words=", Z.reversestr("word"));
console.log("revers of number=", Z.reverse(123));
console.log("sorting an array=", Z.sort([1,5,4,7]));
console.log("area of circle=", Z.circle(10));
console.log("area of rectangle=", Z.rect(25,4));
console.log("area of square=", Z.square(15));

//console.log(module1.maximum(array));
//const f = require('./Assignment3');
