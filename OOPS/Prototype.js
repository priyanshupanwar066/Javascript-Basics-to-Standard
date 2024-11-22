let myName = "Priyanshu      ";

// console.log(myName.trueLength());

let MyHeros = ["Thor", "SpiderMan"];

let HeroPower = {
  Thor: "Hammer",
  SpiderMan: "Sling",

  getSpiderPower: function () {
    // console.log(`His power is Strength ${this.SpiderMan}`);
  },
};

Object.prototype.priyanshu = function () {
  // console.log(`Piryanshu is Present in All Obj`);
};

Array.prototype.HeyPriyanshu = function () {
    // console.log(`Priyanshu Say Ram Ram`);
    
}

// HeroPower.priyanshu();
// MyHeros.priyanshu();
// MyHeros.HeyPriyanshu();
// HeroPower.HeyPriyanshu();



// Inhertance 
const user = {
  userName: "Priyanshu",
  email: "priyanshu@gmail.com",
  age: 25,
  signedIn: true,
}
const Teacher = {
    makeVideo : true
}

const TeachingSuppot = {
    isAvilable: false
}

const TASupport = {
    makeAssignmnet : "Js Assignment",
    fullTime : true,
    __proto__ : TeachingSuppot

}

Teacher.__proto__ = user

// Modern Syntax

Object.setPrototypeOf(TeachingSuppot , Teacher)

let AnotherUserName = "PRiyanshu PANWAR    "

String.prototype.trueLength = function(){
  // console.log(`${this.name}`);
  console.log(`${this}`);
  console.log(`True length Is ${this.trim().length}`);
}

AnotherUserName.trueLength()

"Priyanshu".trueLength()
"Panwar".trueLength()