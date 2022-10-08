//----------------------(1)  filter for >10------------------
function greater(arra){
    let newarray= arra.filter(x=>{
        if( x>10) {
            return true;
        }
    })
    return newarray;
}

//-------------------------------(2) less than 10---------------
function less(a){
    let A= a.filter(p=>
        {if(p<10){
            return true;
        }
        })
        return A;
}


//-------------------------------(3)  prime number---------------------------------------
function prime(B){
    let count=0;
    for(let i=2; i<=B/2; i++){
        
        if(B%i ===0){
            count++;
            break;
        }
    }
    return count==0;
      
}

//-----------------------------(4)Array of prime no.-------------------------------------

function prmArray(F){
    let G=F.filter(k=>{
        
        return prime(k);
    })
    return G;  

}

//-------------------------------(5)even odd----------------------------

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

//---------------------------------(6)square--------------------------------------
function square(D){
    let d=D.map(sqr=>{
        return Math.pow(sqr,2);
    }
        )
        return d;
}

//---------------------------------(7)root-----------------------------------------
 function root(E){
     let r=E.map(rt=>{
         return Math.sqrt(rt);
     }
         )
         return r;
 }

//----------------------------------(8)Palindrome------------------------------------
function palindrome(str){
    let len=str.length;
        for(i=0; i<len/2; i++){
            if(str[i] !== str[len-1-i]){
                return false;
            }
            return true;
        }
        }

//-------------------------------------(9)-reverse str------------------------------
let rev="";
function reverse(w){
for(i=0;i<w.length;i++)
    {
    rev= w.charAt(i)+rev;
    }
        return rev;
    }
  
//--------------------------------------(10)-reverse num------------------------------
 
function reverse(number){
    let rem;
    let reversed=0;
    while(number>0)
            {
                rem=number%10;
               
                reversed=(reversed*10)+rem;
                number=parseInt(number/10);
            }
            return reversed;
        }

//------------------------------------(11)sort an array-----------------


 function sort(newarr){
   let arr2=[];
let tp;
for(let i=0; i<newarr.length; i++)
{
    for(let j=i+1; j<newarr.length; j++){
        if(newarr[i]> newarr[j])
        {
            tp=newarr[i];
            newarr[i]=newarr[j];
            newarr[j]=tp
        }
    }
}
return newarr;
}

//------------------------------area of circle-----------
function circle(r){
    const pi=3.142;
    let area=pi*r*r;
    return area;
}

//-------------------------------area of rectangle----------------
function rect(l,wd){
    
    let area1= l*wd;
    return area1;
}

//--------------------------------area of square-----------------
function square(w){
    let area2=w*w;
    return area2;
}

//-----------------------------------age calculation--------------

let months=[31,28,31,30,31,30,31,31,30,31,30,31];

let today=new Date();
let tm=today.getMonth();
let td=today.getDate();
let ty=today.getFullYear();
//-----------------------------
let dob=new Date(2000, 1, 12);
let bm=dob.getMonth();
//console.log(bm);
let bd=dob.getDate();
let by=dob.getFullYear();

let byear=ty-by;
if(tm>=bm){
    bmonth=tm-bm;
    //console.log(bmonth);
}

else{
    byear--;
    bmonth=12+tm-bm;
}
if(td>=bd){
    bdate=td-bd;
}
else{
    bmonth--;
    let days=months[tm-2];
    bdate=days+td-bd;
    if(bmonth<0){
        bmonth=11;
        byear--;
    }
}
console.log(byear,bmonth,bdate);


//------------------------------------------------------------------------//
console.log(greater([11,2,4,55]));
console.log(less([9,12,64,5,7]));
console.log(prime(12));
console.log(prmArray([23,10,4,13]));
console.log(evenarray([1,2,3,4,5]));
console.log(odarray([1,2,3,4,5]));
console.log(square([2,4,5]));
console.log(root([4, 16, 25]));
console.log(palindrome("madam"));
console.log(reverse("word"));
console.log(reverse(123));
console.log(sort([1,5,4,7]));
console.log(circle(10));
console.log(rect(25,4));
console.log(square(15));