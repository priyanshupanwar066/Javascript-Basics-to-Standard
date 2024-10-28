const coding = ["js" , "jsx" , "java" , "python" , "cpp"]

const values = coding.map(item => {
    // console.log(item);
    return item;
});

// console.log(values); // undefined, as forEach does not return a new array but undefined.


const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNum.filter((num)=> num > 4)

// console.log(newNums);


const newNum = []

myNum.forEach((num) => {
    if(num >4){
        newNum.push(num)
    }
}); 

// console.log(newNum);



const Books = [
    {title: "Book One" , genre: "Non-fiction" , publish: 1989 , edition: 2010},
    {title: "Book Two" , genre: "Fiction" , publish: 1995 , edition: 2000},
    {title: "Book Three" , genre: "Maths" , publish: 2005 , edition: 2015},
    {title: "Book Four" , genre: "History" , publish: 2010 , edition: 2020},
    {title: "Book Five" , genre: "Non-fiction" , publish: 1989 , edition: 2010},
    {title: "Book Six" , genre: "Fiction" , publish: 1995 , edition: 2000},
    {title: "Book Seven" , genre: "Maths" , publish: 2005 , edition: 2015},
];

// const Book = Books.filter ( (bk) => bk.genre === "Fiction")
const Book = Books.filter ( (bk) => bk.publish >= 2000)
console.log(Book);