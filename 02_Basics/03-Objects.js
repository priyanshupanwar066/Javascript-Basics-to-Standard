// singleton 
//Object.


//object literals

const Jsuser = {
    name: "Priyanshu",
    "full Name": "Priyanshu Panwar",
    age : 21,
    Location :"Saharanapur",
    email : "priyanshu@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Tuesday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full Name"]);



Jsuser.email="Priyu@gmail.com"
Object.freeze(Jsuser)
Jsuser.email="Priyugurjar@gmail.com"
// console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("hellow Js Users");   
}
Jsuser.greetingTwo = function(){
    console.log(`hellow Js Users , ${this.name} `);   
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

