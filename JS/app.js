const square = (a) => a * a;
console.log(`The square of ${5} is ${square(5)}`);

const person = {
    firstName: 'Alice',
    age: 25,
   
    greet: function () {
        console.log('Hello,', this.firstName, 'You are', this.age, 'years old.' );
    }
}
person.greet();


const person = {}

const { firstName: 'John', lastName: 'Doe'} = person;
console.log(`First Name:`, person.firstName);
console.log(`Last Name:`, person.lastName);

