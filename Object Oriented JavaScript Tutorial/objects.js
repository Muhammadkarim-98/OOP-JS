BISMILLAH;
const userName = {
	email: "uzbekistan@",
	name: "Smith",
	login() {
		console.log(this.email + " has logged in!");
	},
	logout() {
		console.log(this.name + " has logged out!");
	},
};
userName.login();

// updating properties
userName.name = "Samandar";
userName["email"] = "uzbeks.gmail.com";
const prop = "name";
userName[prop]; // 'Samandar'
// creating new properties
userName.age = 26;

// CREATING OBJECTS WITH CLASSES
class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
		this.score = 0;
	}
	login() {
		console.log(this.email + " has logged in!");
		return this; // with this we can chain methods
	}
	logout() {
		console.log(this.name + " has logged out!");
		return this; // with this we can chain methods
	}
	updateScore() {
		this.score++;
		console.log(this.email + "'s score is " + this.score + " now!");
		return this; // with this we can chain methods
	}
}

const user1 = new User("Sam", "sam@gmail.com");
const user2 = new User("John", "john@gmail.com");
user1.login();
user2.updateScore();
user2.updateScore().login().logout(); // chaining methods with "return this" 👆🏻

// Class inheritance (deleting user)
class Admin extends User {
	deleteUser(user) {
		users = users.filter((u) => {
			return u.email != user.email;
		});
	}
}
const admin = new Admin("admin@gmail.com", "mr admin");
let users = [user1, user2, admin];
admin.deleteUser(user1);
console.log(users); // [User, Admin]

// Constructors
function User(name, email) {
	this.name = name;
	this.email = email;
	this.online = false;
	// this.login = function () {
	// 	console.log(this.email + ' has login in!')
	// }
}

// Prototype for User
User.prototype.login = function () {
	console.log(this.email + " has login in!");
};

function Admin(...args) {
	User.apply(this, args);
	this.role = "super admin";
}
// Prototype inheritance from User prototype
Admin.prototype = Object.create(User.prototype);
// Adding new prototype for Admin only
Admin.prototype.deleteUser = function (user) {
	users = users.filter((u) => {
		return u.email != user.email;
	});
};

const userOne1 = new User("Mike", "mikky@gmail.com");
const userTwo2 = new User("lee", "lee@gmail.com");
userOne1.login();

const admin = new Admin("Adminka", "adminkauzb@gmail.com");
let users = [userOne1, userTwo2, admin];
admin.login();
admin.deleteUser(users[1]); // [User, Admin]
