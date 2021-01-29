
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.say = function(){
    console.log("wala")
}
Person.info = "123"
var p1 = new Person("Misha", 8)
console.log(p1.name);
console.log(p1.say());
console.log(Person.info);
console.log(p1);

class Per{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log("walala")
    }
    static sayHello(){
        console.log("this is a static method")
    }
    static info = "123"
}

var p2 = new Per("Rylie", 8);
console.log(p2.say());
console.log(p2.name);
console.log(Per.info);
console.log(Per.sayHello());
console.log(p2);

