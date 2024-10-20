const user ={
    username: "Priyu",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} Welcome TO Website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function One (){
//     let username = "Priyu"
//     console.log(this);   
// }
// One()

// const Priyu = function (){
//     let username = "Priyanshu"
//     console.log(this.username);
    
// }

// Priyu()

// const Priyu = () =>{
//     let username = "Priyanshu"
//     console.log(this);
    
// }

// Priyu()

// const AddTwo = (num1 , num2) =>{
//     return num1 + num2;
// }

// console.log(AddTwo(2 , 3));

// const AddTwo = (num1 , num2) => num1 + num2

// console.log(AddTwo(2 , 3));


const AddTwo = (num1 , num2) => (num1 + num2)

console.log(AddTwo(2 , 3));