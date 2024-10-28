const coding = ["js" , "Cpp" , "Java" , "Python" , "JavaScript" ]

// coding.forEach(  function (item) {
//     console.log(item);
//  } );


// coding.forEach( (item) => {
//     console.log(item);
//  } );


// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach( (item , index , arr)=> {
//     console.log(item , index, arr);
    
// } )

const mycoding = [
    {
        languagename : "JavaScript",
        languageFileName : "Js"
    },
    {
        languagename : "Python",
        languageFileName : "Py"
    },
    {
        languagename : "Java",
        languageFileName : "Java"
    }
]

mycoding.forEach( (item) => {
    console.log(item.languagename);
    
})