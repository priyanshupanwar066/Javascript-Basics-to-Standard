const UserEmail = "Priyu@gamil.com"
// const UserEmail = ""

if (UserEmail){
    console.log("Got user email");
}
else{
    console.log("Don't Have User Email");
}


// False Value

// false , 0 ,-0 , BigInt 0n , "" , null , undefined , NaN

//Truth Value

// "0" , "False" , " " , [] , {} , function(){} 


// Nullish Coalescing Operator (??) : Null Undefined


let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 

console.log(val1);


// terniary Operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 50 ? console.log("Less Than 50") : console.log("More Than 50");
