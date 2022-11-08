// const person = {
//     name: "Takuya Toyokawa",
//     age: 21
// }

console.log(__dirname, __filename)

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}

const person1 = new Person("Takuya Toyokawa", 21)

person1.greeting()

module.exports = Person

