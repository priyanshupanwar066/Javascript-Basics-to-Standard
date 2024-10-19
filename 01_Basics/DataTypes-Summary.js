// Primitive

// 7 types : String , Number , Boolean , Null ,undefined , Symbol , BigInt



const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;
const id = Symbol("123")
const anotherid = Symbol("123")

// console.log(id === anotherid);

const bigNumber = 12873872387123333333338n





// Reference (Non Primitive)

// Array , Objects , functions


const heros = ["ShaktiMan" , "NaagRaj" , "Hatim"]

let myobj1=  {
    name: "Priyu",
    age: 25,
}

const myfunction = function () {
    // console.log("Hellow users");   
}

// console.log(typeof scoreValue);


//******************************************************************/

// Stack (Primitive) , Heap (NON-Primitive)
// Jab Stack Ke Ander Koi Bhi data lete ha To Uska Copy hi milta hai 
// Heap ke ander refrence milta hai

let myYoutubeName = "Panwar Ji technical"

let anotherName = myYoutubeName
anotherName = "Code Or Maje"

console.log(myYoutubeName);
console.log(anotherName);

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "newUser@gmail.com"

console.log(user1.email);
console.log(user2.email);




