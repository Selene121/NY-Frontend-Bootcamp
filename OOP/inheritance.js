console.log("Hello OOP!");
//Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal{
    bark() {
        console.log('Woof woof!');
    }
}

const myDog = new Dog('Buddy');
myDog.bark();
myDog.eat();

class Cat extends Animal{
    Meow() {
        console.log('Meow!');
    }
}

const myCat = new Cat('Kitten');
myCat.Meow();
myCat.eat();


