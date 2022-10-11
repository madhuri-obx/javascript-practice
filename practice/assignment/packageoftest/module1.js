//-------------------Print an Input-------------------------------1
function input(fruit){
    return fruit;
}

//-------------------Checking of number----------------------------2

function isnumber(inp) {
    let z=typeof(inp);
    if(z=== "number")               {
        return true;
    }
    else{
       return false;
    }
}

//--------------------checking of string------------------------------3

function isstring(q){
    let x=typeof(q);
    if(x==="string"){
        return true;
    }
    else{
        return false;
    }
}
//--------------------for Even number-------------------------------4

function iseven(num){
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
}

//---------------------for Odd number------------------------------5

function isOdd(No){
    if(No%2!==0){
        return true;
    }
    else{
        return false;
    }
}


//----------------------Finding length of string-----------------------------6
function len(A){
    let L=A.length;
    return L;
}

//----------------------Uppercase------------------------------7
 function up(x){
    let U= x.toUpperCase();
    return U;
 }

//------------------------Lowercase----------------------------8

function low(Y){
    let V= Y.toLowerCase();
    return V;
}

//------------------------Square of No.----------------------------9
function square(z){
    
    let m=(Math.pow(z,2));
    return m;
}

//-----------------------Square root of no.-----------------------------10
function root(num){
    let n=(Math.sqrt(num,2))
    return n;
}

//-----------------------Length of array------------------------------11
function arr(Ar){
    let o=(Ar.length);
    return o;
}

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



// //------------------------for small value in array------------------------------13
function minimum(arra){

    let max = arra[0];

    arra.map(element=>{
        if(max > element) {
            max = element
        }       
    })
// for(let i=0; i<arra.length; i++)
// {
//   if(max >arra[i])
//   {
//      max = arra[i];
//   }
// }
return max;
}
//--------------------sum of array-----------------------------------14
function sumof(array1){

    for (var i = 0, sum = 0; i < array1.length; sum += array1[i++]);
    return sum;
    }
    
//----------------------ave of array---------------------------------15

function avg(array1){
       
    let m;
    let b=array1.length;
    arraysum=sumof(array1)
     m=(arraysum/b);
     return m;

 }
//------------------------------------------------------------------16

// module.exports = { isnumber, iseven, avg }
module.exports = { isOdd, iseven, square, root, maximum, minimum, avg, sumof };

// console.log(input("Apple"));

// console.log(isnumber(2));
// console.log(isnumber("abc"));

// console.log(isstring("mmmm"));
// console.log(isstring(10));

// console.log(iseven(10));
// console.log(iseven(11));

// console.log(isOdd(13));
// console.log(isOdd(14));

// console.log(len("Apple"));

// console.log(up("Apple"));

// console.log(low("Apple"));

// console.log(square(4));

// console.log(root(16));

// console.log(arr([1,2,3,4]));

// console.log(maximum ([1, 2, 3, 4]));

// console.log(minimum ([10, 20, 30, 40]));

// console.log(sumof([10, 20, 30, 40]));

// console.log(avg([10, 20, 30, 40]));