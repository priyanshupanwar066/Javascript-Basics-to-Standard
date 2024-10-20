// var c = 40
let a = 300
if (true){
    let a = 10;
    const b = 60;
    // console.log("INNER:" , a);  
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log(a);
// console.log(b); 
// console.log(c);
 
function one() {
    const username = "Priyanshu"

    function two (){
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()


if (true) {
    const username = "Priyanshu"
    if (username === "Priyanshu") {
        const website = " Youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
}
// console.log(username);



//++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++


console.log(addone (5))
function addone (Value){
    return Value + 1;
}



addTwo(5)
const addTwo = function(Value){
    return Value + 2;
}
