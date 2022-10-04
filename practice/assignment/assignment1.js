//-------------------Print an Input-------------------------------1
function input(fruit){
    return fruit;
}

let A=input("Apple");

console.log(A)
//-------------------Checking of number----------------------------2
let inp= 2;
let z=typeof(inp);
//console.log(A)
function check(){
    if(z==="string"){
        console.log("Its a false");
    }
    else{
        console.log("its a true");
    }
}

check(input);
//--------------------checking of string------------------------------3

let q= 10;
let x=typeof(q);
//console.log(A)
function check(){
    if(x==="string"){
        console.log("True");
    }
    else{
        console.log("False");
    }
}

check(q);
//--------------------for Even number-------------------------------4

function check(num){
    if(num%2===0){
        console.log("True")
    }
}
let y=check(10)
//---------------------for Odd number------------------------------5

function check2(No){
    if(No%2!==0){
        console.log("False")
    }

}
check2(11);
//----------------------Finding length of string-----------------------------6
function len(A){
    console.log(A.length);
}
len("Apple");
//----------------------Uppercase------------------------------7
 function up(x){
     console.log(x.toUpperCase());
 }
up("Apple");
//------------------------Lowercase----------------------------8

function low(x){
    console.log(x.toLowerCase());
}
low("Apple");
//------------------------Square of No.----------------------------9
function sqr(Y){
    console.log(Math.pow(Y,2))
}
sqr(4);
//-----------------------Square root of no.-----------------------------10
function root(Y){
    console.log(Math.sqrt(Y,2))
}
root(16);
//-----------------------Length of array------------------------------11
function arr(A){
    console.log(A.length);
}
arr([1,2,3,4,5]);
//----------------------for maximum value in array-------------------------------12


function maximum(newarr){

    let max = newarr[0];
for(let i=0; i<newarr.length; i++)
{
  if(max < newarr[i])
  {
     max = newarr[i];
  }
}
return max;
}
let newarr=[1, 2, 3, 4];
console.log(maximum (newarr));

// //let points=[1,2,3,4];
// let c=points.sort(function(a, b){return b - a});
// console.log(c[0]);


// //------------------------for small value in array------------------------------13
function minimum(arra){

    let max = arra[0];
for(let i=0; i<arra.length; i++)
{
  if(max >arra[i])
  {
     max = arra[i];
  }
}
return max;
}
let arra=[1, 2, 3, 4];
console.log(minimum (arra));

// let small=[10, 20, 30, 40];
// let d=small.sort(function(a, b){return a- b});
// console.log(d[0]);
//--------------------sum of array-----------------------------------14
const numbers = [10, 20, 30, 40];
let sum = numbers.reduce(myFunction);
console.log(sum);
function myFunction(total, value, index, array) {
  return total + value;
}
//----------------------ave of array---------------------------------15
let b=numbers.length;
//console.log(b);
let m;
 function avg(){
     m=console.log(sum/b);
     return m;
 }
 avg(sum)

 
//------------------------------------------------------------------16
