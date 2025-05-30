class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{  // Teacher inherits from User.
    constructor(username, email, password){
        super(username)  // super() calls the parent class’s constructor,    Since User needs username, we
        //  pass it to super(),   This is required when using extends — you must call super() before
        //  using this.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")
masalaChai.logMe()
// masalaChai.addCourse()  // this is wrong and will give ERROR

console.log(chai instanceof User);