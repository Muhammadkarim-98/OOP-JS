// BISMILLAH
// SUBCLASSING WITH FACTORING FUNCTIONS

const obj = {
	num: 4,
	increment: function () {
		this.num++;
	},
};
const otherObj = { num: 8 };

obj.increment;
obj.increment.call(otherObj); // 9

// SOLUTION - 2
function userCreator(name, score) {
	const newUser = Object.create(functionStore);
	newUser.name = name;
	newUser.score = score;
	return newUser;
}

functionStore = {
	sayName: function () {
		console.log("I'm " + this.name);
	},
	increment: function () {
		this.score++;
	},
};

const brandNewUser = userCreator("Sam", 10);
brandNewUser.increment();

// SUBCLASSING with FUNCTION FACTORY IN SOLUTION
function paidUserCreator(paidName, paidScore, accountBalance) {
	const newPaidUser = userCreator(paidName, paidScore);
	Object.setPrototypeOf(newPaidUser, paidUserFunction);
	newPaidUser.accountBalance = accountBalance;

	return newPaidUser;
}

const paidUserFunction = {
	increaseBalance: function () {
		this.accountBalance++;
	},
};
// Linking to user functions store with (Object.setPrototypeOf())
Object.setPrototypeOf(paidUserFunction, functionStore);

const paidUser = paidUserCreator("Maria", 8, 22);
paidUser.increaseBalance();
// ------------------------------------------------
// SOLUTION 3
function userCreator2(name, score) {
	this.name = name;
	this.score = score;
}

userCreator2.prototype.sayName = function () {
	console.log("I'm " + this.name);
};
userCreator2.prototype.increment = function () {
	this.score++;
};

const user1 = new userCreator2("Suzy", 6);
const user2 = new userCreator2("Mary", 3);
user2.sayName(); // I'm Mary

// SOLUTION 3 (CONSTRUCTOR APPROACH)
function paidUserCreator2(paidName, paidScore, accountBalance) {
	userCreator2.call(this, paidName, paidScore);
	this.accountBalance = accountBalance;
}

paidUserCreator2.prototype = Object.create(userCreator2.prototype);
paidUserCreator2.prototype.increaseBalance = function () {
	this.accountBalance++;
};

const paidUser2 = new paidUserCreator2("John", 12, 90);
paidUser2.increaseBalance(); // 91
paidUser2.sayName(); // John
