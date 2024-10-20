function sayMyname(){
console.log("P");
console.log("R");
console.log("I");
console.log("Y");
console.log("A");
console.log("N");
console.log("S");
console.log("H");
console.log("U");
}

// sayMyname();

// function addTwoNumbers(number1 , number2) {
//     console.log(number1+number2);
// }


function addTwoNumbers(number1 , number2) {
    // let result = number1 + number2
    // return result;    
    return number1 + number2
}


const result = addTwoNumbers(3,5)

// console.log("Result:" , result);

function loginuserMessage (username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just Logged In` 
}

// console.log(loginuserMessage("Priyanshu"))
// console.log(loginuserMessage("priyu"))


function calculateCartPrice (val1 , val2 , ...num1){
    return num1
}
// console.log(calculateCartPrice(200 , 400 , 500 , 2000));

const user= {
    username : "Priyanshu",
    prices : 199
}
function handleObjecct(anyobject){
    console.log(`username is ${anyobject.username} and Price is ${anyobject.price}`);
}

// handleObjecct(user)
handleObjecct({
    username:"sam",
    price : 399 
})

const myNewArray = [200,400,100,600]

function returnSecondValue (getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
