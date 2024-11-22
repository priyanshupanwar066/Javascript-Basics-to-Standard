class User {
    constructor(username) {
        this.username = username;
    }

    LogMe(){
        console.log(`UserName : ${this.username}`);
    }

    CreateId (){
        return `123`
    }
}

const Priyu = new User("Priyanshu")

console.log(Priyu.CreateId());

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}


const Iphone = new Teacher ("iphone" , "phone@gamil.com" , "123")

console.log(Iphone.CreateId());