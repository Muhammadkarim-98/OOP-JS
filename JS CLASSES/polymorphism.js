// BISMILLAH
// POLYMORPHISM

class Animal {
	constructor(name) {
		this.name = name;
	}

	makeSound() {
		console.log("Generic Animal sound!");
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name);
	}
	makeSound() {
		super.makeSound()
		console.log("Woof, Woof!");
	}
}

const a1 = new Animal('Jeff');
const a2 = new Dog('Dom');
a2.makeSound(); // Generic Animal sound! Woof, Woof!
