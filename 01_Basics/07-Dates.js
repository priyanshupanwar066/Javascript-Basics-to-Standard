// Date

let myDate = new Date ()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());


// console.log(typeof myDate);


// Date with specific values

// let myCreatedDate = new Date(2023 , 2 , 23)
// let myCreatedDate = new Date(2024 , 0 , 23 ,5 , 3)
let myCreatedDate = new Date ("2024-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);

let newDate = new Date ()
console.log(newDate.getDate());



// `$ {newDate.getDate() and the time `}

newDate.toLocaleString('default' ,{
    weekday: "long"
})

