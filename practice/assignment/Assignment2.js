function minimum(arra){

    let max = arra[0];

    arra.map(element=>{
        if(max > element) {
            max = element
        }
    })
        return max;      
    }
    

    //--------------------------finding maximum value--------------
    function maximum(array){
        let max= array[0];
        array.map(value=>{
            if(max<value){
                max =value
            }
            })
            return max;
    }
   
    //-------------------------finding total-----------------------
    function sumof(array1){

        let sum = 0;
        array1.map(total=>{
         
            sum += total

        })
        
        return sum;
        }

//------------------------------finding average---------------------

function average(array2){
    let l=array2.length;
    sum=sumof(array2);
    let ave=(sum/l);
    return ave;
}

//---------------------------------finding even odd array-------------
let aarray=[10,15,20,33,74,55];
let evarray=aarray.filter(evenarray);
let oddarray=aarray.filter(odarray);

function evenarray(value){
    let evarray=value.filter(even=>{

    return even %2 ===0;
})
    return evarray;
}

function odarray(value){
    let oddarray=value.filter(odd=>{

    return odd %2 !==0;

    })
    return oddarray;
}


//----------------------------------------------------------------------
console.log(minimum([10, 2, 30, 40]));
console.log(maximum([10, 2, 30, 40]));
console.log(sumof([10,20,30,40]));
console.log(average([10,50,60,90,40]));
console.log(evenarray([1,2,3,4,5]));
console.log(odarray([1,2,3,4,5]));