// ES6 

class User {
    constructor(username , email , password){
        this.username = username
        this.email = email
        this.password = password
    }

    ChangeUsername(){
        return `${this.username.toUpperCase()}`
    }
    encryptPassword(){
        return `${this.password}abc`
    }

}

const Priyu = new User ("Panwar" , "panwar@gmail.com" , "12345")

console.log(Priyu.encryptPassword());
console.log(Priyu.ChangeUsername());



//Behind The Scene


function user(username, password , emial){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}


user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const Tea = new User ("Tea" , "Tea@gmail.com" , "12345")

console.log(Tea.encryptPassword());
console.log(Tea.ChangeUsername());

