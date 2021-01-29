class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log('这是person中的say方法')
    }
}

class Chinese extends Person{
    constructor(name, age, color, language){
        super(name, age)
        this.color = color;
        this.language = language;
    }

}

var p1 = new Person('Carol', 15);
console.log(p1);

var c1 = new Chinese('yellow', 'Chinese');
console.log(c1);



class Animal{
    say(){}
}

class Dog extends Animal{
    say(){
        console.log('walfwalf')
    }
}

class Cat extends Animal{
    say(){
        console.log('mewwww')
    }
}