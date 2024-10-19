// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.Name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname :{
        userFullname: "Priyu",
        lastName: "Choudhary"
    }
}
// console.log(regularUser.fullname.userFullname);



const obj1 = {1: "a" , 2:"b"}
const obj2 = {3: "a" , 4:"b"}
const obj4 = {5: "a" , 6:"b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1 , obj2 , obj4)

const obj3 = {...obj1,...obj2}
// console.log(obj3);


const users= [
    {
        id: "123abc",
        name: "Sammy"
    },
    {
        id: "def45",
        name: "John"
    },
    {
        id: "ghi678",
        name: "Emily"
    }
]

users[1].name
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course ={
    coursename : "Js In Hindi",
    price : "999",
    courseInstructor : "Priyu"
}

// Course.courseinstrucutor

const {courseInstructor : instructor} = course

console.log(instructor);


// {
//    " name": "Priyanshu",
//     "coursename" : "AI",
//     "price" : "1999",
//     "courseInstructor" : "Priyu"
// }

// [
//     {},
//     {},
//     {}
// ]