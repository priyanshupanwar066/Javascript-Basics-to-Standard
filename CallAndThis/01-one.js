function setuserName(username){
    this.userName = username;
    console.log("Calling CreateUser");
}

function CreateUser(username, password , email){
    setuserName.call(this ,username) 

    this.password = password;
    this.email = email;
}

const Priyu = new CreateUser ("Priyanshu Panwar" , "priyanshu@gmail.com",  "12345")
console.log(Priyu);
