const name = "Priyanshu"
const repocount = 50

// console.log(name + repocount + "value");


console.log(`Hello My Name Is ${name} And My Repo Count is ${repocount} `);

const gameName = new String("Priyu_Games")

// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('i'));


const newString = gameName.substring(0 , 4)
console.log(newString);

const AnotherString = gameName.slice(-1, 4)
console.log(AnotherString);

const newStringOne = "  Priu   "
console.log(newStringOne);
console.log(newString.trim());


const url = "hhtps://localHost.com/priyu%20Choudhary"

console.log(url.replace('%20' , '_'));


console.log(url.includes('priyu'));

console.log(gameName.split('_'));



 




