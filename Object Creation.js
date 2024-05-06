// BISMILLAH
// this is principle of encapsulation (OOP)
const user1 = {
	name: "Phil",
	score: 8,
	increment: function () {
		user1.score++;
	},
};
user1.increment(); // 9

// Creating user2 user  "dot notation" (alternative way);
const user2 = {};
user2.name = "Sam";
user2.score = 2;
user2.increment = function () {
	user2.score++;
};

// Creating user3 user Object.create
const user3 = Object.create(null);
user3.name = "Julie";
user3.score = 5;
user3.increment = function () {
	user3.score++;
};

// Generating objects using a function
function userCreator(name, score) {
	const newUser = {};
	newUser.name = name;
	newUser.score = score;
	newUser.increment = function () {
		newUser.score++;
	};
	return newUser;
}

const userNew1 = userCreator("Sonny", 7);
const userNew2 = userCreator("Blessing", 1);
userNew1.increment();
