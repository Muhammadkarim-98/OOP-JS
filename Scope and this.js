// We need to introduce arrow function - which bind this lexically, (Arrow functions treat “this” keyword differently. They don't define their context since it doesn't have their own "this" context. They inherit that from the parent scope whenever you call the "this" keyword)
function UserCreator2(name, score) {
	this.name = name;
	this.score = score;
}

UserCreator2.prototype.increment = function () {
	const add = () => this.score++; // !
	return add;
};

UserCreator2.prototype.login = function () {
	console.log("Logged in!");
};

const userNew4 = new UserCreator2("John", 13);

// CLASS "SYNTACTIC SUGAR", let's compare (works same as above code and much cleaner)
class UserCreator3 {
	constructor(name, score) {
		this.name = name;
		this.score = score;
	}
	increment = function () {
		this.score++;
	};
	login = function () {
		console.log("Logged in!");
	};
}

const user = new UserCreator3("Michael", 19);

// EXAMPLE FOR CLASS (CLASS IS TEMPLATE FOR OBJECT, ITS NOT OBJECT AND TYPE OF CLASS IS FUNCTION (special type of function))
class ClassName {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
	age() {
		const date = new Date();
		return date.getFullYear() - this.year;
	}
}

const newCar = new ClassName("Tico", 2005);
console.log(newCar.name, newCar.age()); // Tico, 19
console.log(typeof ClassName);
