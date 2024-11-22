const PromiseOne = new Promise ( function (resolve, reject) {
    // do an async task 
    setTimeout (function (){
        console.log('Async Task is Complete');
        resolve()
    }, 1000)
})

PromiseOne.then(function(){ 
    console.log('Promise One Resolved');
})

new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log('Async Task Two is Complete');
        resolve()
    },2000)
}).then(function(){
    console.log('Promise Two Resolved')
})


const PromiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async Task Three is Complete');
        resolve({
            name: 'John Doe',
            age: 25,

            address: {
                street: '123 Main St',
                city: 'New York'
            }
        })
    }, 3000)
})

PromiseThree.then(function(user){
    console.log(user)
})


const PromiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username: "priyu" , password: "123"})
        }
        else{
            reject(new Error('An error occurred'))
        }
    },4000)
},4000)

PromiseFour.then((user )=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log('An error occurred:', error.message)
}).finally(() => 
    console.log('Promise Four Resolved')
)


const PromisesFive =  new Promise((resolve , reject)=>{
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "priyanshu", password : "123"})
        }
        else{
            reject('Error:Js error occurred')
        }
    },1000)
});
 
async function consumePromiseFive(){
    const response = await PromisesFive
    console.log(response);
}

consumePromiseFive()