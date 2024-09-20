const person = {
    name: 'Sajan', // Person's name
    age: 30,       // Person's age
    greet: function(otherPersonName) {
        console.log(`Hello! My name is ${this.name} and I am ${this.age} years old. Nice to meet you, ${otherPersonName}!`);
    }
};

// Example usage
person.greet('Bob'); // Output: Hello! My name is Sajan and I am 30 years old. Nice to meet you, Bob!
