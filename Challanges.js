// BISMILLAH
// challange link: http://csbin.io/oop
/****************************************************************
									WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 ***/

function makePerson(name, age) {
	const object = { name: name, age: age };
	return object;
}

const vicky = makePerson("Vicky", 24);

// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

/****************************************************************
											 USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 2 ***/

const personStore = {
	greet: function () {
		console.log("Hello");
	},
};

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 3 ***/

function personFromPersonStore(name, age) {
	const newObj = Object.create(personStore);
	newObj.name = name;
	newObj.age = age;
	return newObj;
}

const sandra = personFromPersonStore("Sandra", 26);

// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 4 ***/

personStore.introduce = function () {
	console.log(`Hi my name is ${this.name}`);
};
sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
										USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 5 ***/

function PersonConstructor() {
	this.greet = function () {
		console.log("Hello!");
	};
}

// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor();
simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 6 ***/

function personFromConstructor(name, age) {
	const newObj = new PersonConstructor();
	newObj.name = name;
	newObj.age = age;
	newObj.introduce = function () {
		console.log(`Hi, my name is ${this.name}`);
	};
	return newObj;
}

const mike = personFromConstructor("Mike", 30);

// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 7 ***/

mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
												USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 8 ***/

class PersonClass {
	constructor(name) {
		// add code here
		this.name = name;
	}

	// add code here
	greet() {
		console.log("hello");
	}
}

// /********* Uncomment this line to test your work! *********/
const george = new PersonClass();
george.greet(); // -> Logs 'hello'

/*** CHALLENGE 9 ***/

class DeveloperClass extends PersonClass {
	constructor(name) {
		super(name);
	}

	introduce() {
		console.log(`Hello World, my name is ${this.name}`);
	}
}

// /********* Uncomment these lines to test your work! *********/
const thai = new DeveloperClass("Thai", 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
											EXTENSION: SUBCLASSING
****************************************************************/

const userFunctionStore = {
	sayType: function () {
		console.log("I am a " + this.type);
	},
};

function userFactory(name, score) {
	let user = Object.create(userFunctionStore);
	user.type = "User";
	user.name = name;
	user.score = score;
	return user;
}

/*** CHALLENGE 10 ***/
// Function store for admins, inheriting from userFunctionStore
const adminFunctionStore = Object.create(userFunctionStore);
// Adding an increment method specific to admins
adminFunctionStore.increment = function () {
	this.score++;
};

/*** CHALLENGE 11, 12, 13 ***/

function adminFactory(name, score) {
	let admin = userFactory(name, score);
	Object.setPrototypeOf(admin, adminFunctionStore);
	admin.type = "Admin";
	return admin;
}
const admin1 = adminFactory("Jeff", 10);

admin1.increment();
console.log(admin1.sayType()); // I am a Admin
console.log(admin1.score); // 11

/*** CHALLENGE 14 ***/
/* Put code here for a method called sharePublicMessage*/
const adminFromFactory = adminFactory("Eva", 5);
adminFromFactory.sharePublicMessage = function () {
	console.log("Welcome users!");
};

// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType(); // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage(); // -> Logs "Welcome users!"
/****************************************************************
EXTENSION: MIXINS
****************************************************************/

class Dog {
	constructor() {
		this.legs = 4;
	}
	speak() {
		console.log("Woof!");
	}
}

const robotMixin = {
	skin: "metal",
	speak: function () {
		console.log(`I have ${this.legs} legs and am made of ${this.skin}`);
	},
};

let robotFido = new Dog();

robotFido = Object.assign(Dog.prototype, robotMixin);

// /********* Uncomment to test your work! *********/
robotFido.speak(); // -> Logs "I am made of metal"
