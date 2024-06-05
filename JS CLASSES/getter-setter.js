// BISMILLAH
// Consider an array of objects representing different products in a shopping cart, like the one shown below:

let cart = [
	{ name: "Apple", category: "Fruit", quantity: 10, price: 0.5 },
	{ name: "Orange", category: "Fruit", quantity: 5, price: 0.8 },
	{ name: "Broccoli", category: "Vegetable", quantity: 2, price: 1.5 },
	{ name: "Carrot", category: "Vegetable", quantity: 8, price: 0.2 },
	{ name: "Chicken", category: "Meat", quantity: 1, price: 10 },
];

// Write a JavaScript function that calculates the total cost of all 'Fruit' items in the cart.Please ensure your function adheres to functional programming principles and avoids changing the original 'cart' array.
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	// Getter for fullName
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	// Setter for fullName
	set fullName(name) {
		[this.firstName, this.lastName] = name.split(" ");
	}
}

const person1 = new Person("John", "Smith");
console.log(person1.fullName);

const t = (Person.fullName = "Sam Clock");
console.log(t);
