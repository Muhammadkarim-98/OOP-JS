// BISMILLAH
// Using the prototype chain
const userFunctionStore = {
	increment: function () {
		this.score++;
	},
	login: function () {
		console.log("Logged in!");
	},
};

const simpleUser = { name: "Phil", score: 10 };
simpleUser.name; // name is property of simpleUser object
simpleUser.increment; // name is NOT!

// functions are both objects and functions :/
function multiplyBy2(num) {
	return num * 2;
}

multiplyBy2.score = 6;
multiplyBy2(4); // 8

multiplyBy2.score; // 6
console.log(multiplyBy2.prototype); // {}

// Complete solution 3
function UserCreator(name, score) {
	this.name = name;
	this.score = score;
}

userCreator.prototype.increment = function () {
	this.score++;
};
userCreator.prototype.login = function () {
	console.log("Logged in!");
};

const user = new UserCreator("Adam", 11);
user.increment;
console.log(user);
