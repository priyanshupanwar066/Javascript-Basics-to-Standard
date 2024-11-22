class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    AddCourses() {
        console.log(`A New Course was added by ${this.username}`);
    }
}

const Priyanshu = new Teacher("Priyu", "priyu@gamil.com", "12345");
Priyanshu.AddCourses();
