const accountId = 1334455
let accountEmail = "priyanshu@gmail.com"
var accountPassword = "1234"
accountCity = "Saharanpur"
let accountState;

// accountId = 2 // Not Allowed

accountEmail = "priyu@gmail.com"
accountPassword = "212121"
accountCity = "Bengaluru"
console.log(accountId);

/*
Prefer not to use var 
because of issues in block scope {}  and Functional scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);