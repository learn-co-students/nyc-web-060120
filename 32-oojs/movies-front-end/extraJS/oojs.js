console.log("oojs")


class Person {
  constructor(name, age){
    this.name = name
    this.age = age
  }

  greeting(){
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
  }

  static sayHi(otherName){
    console.log(`Hi there ${otherName}.`)
  }
}

class Student extends Person{
  constructor(name, age, grade){
    super(name, age)
    this.grade = grade
  }


}

const olivia = new Person("Olivia", 40)
const jeremy = new Student("Jeremy", 12, 7)










































// class Person {
//   constructor(age, name, interests){
//     this.age = age
//     this.name = name
//     this.interests = interests
//   }

//   bio(){
//     return `${this.name} is ${this.age} years old and enjoys ${this.interests.join(', ')}`
//   }
// }

// class Student extends Person {
//   constructor(age, name, interests, grade){
//     super(age, name, interests)
//     this.grade = grade
//   }
// }

// let steven = new Person(21, "Steven", ["knitting", "eating", "sleeping"])

// let michael = new Student(22, "Michael", ["HP", "Simpsons"], 30)