//Q1.  Define an interface User with the following properties: 
// id(number), name(string), email(string), age(number optional)
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _UserManager_users;
//Q2. Create a class UserManager with:
// A private array users: User[] to store user data.
// A method addUser(user: User): void that adds a new user.
// A method removeUser(id: number): void that removes a user by ID.
// A method getUser(id: number): User | undefined that retrieves a user by ID.
// A method getAllUsers(): User[] that returns all users.
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class UserManager {
    constructor() {
        _UserManager_users.set(this, []);
    }
    addUser(usr) {
        const index = __classPrivateFieldGet(this, _UserManager_users, "f").findIndex(user => user.id === usr.id);
        if (index == -1) {
            if (usr instanceof User) {
                __classPrivateFieldGet(this, _UserManager_users, "f").push(usr);
            }
        }
        else {
            console.log(`Invalid user data. ${usr.id} and name ${usr.name}`);
        }
    }
    removeUser(id) {
        const index = __classPrivateFieldGet(this, _UserManager_users, "f").findIndex(user => user.id === id);
        console.log(index);
        if (index !== -1) {
            __classPrivateFieldGet(this, _UserManager_users, "f").splice(index, 1);
            console.log(`User with ID ${id} has been removed.`);
        }
        else {
            console.log(`User with ID ${id} not found.`);
        }
    }
    getUser(id) {
        return __classPrivateFieldGet(this, _UserManager_users, "f").find(user => user.id === id);
    }
    getAllUsers() {
        return __classPrivateFieldGet(this, _UserManager_users, "f");
    }
}
_UserManager_users = new WeakMap();
const user1 = new User(1, "Amit");
const user2 = new User(2, "Milan");
const user3 = new User(3, "Raushan");
const userManager = new UserManager();
userManager.addUser(user1);
userManager.addUser(user2);
userManager.addUser(user3);
console.log(userManager.getUser(3));
console.log(userManager.getAllUsers());
userManager.removeUser(2);
console.log(userManager.getAllUsers());
//Q3. Use Arrow Functions & Default Parameters
//Add a method getUser = (name: string = "Guest"): string that returns a greeting message.
const getUser = (name = "Guest") => {
    return `Hi, ${name}`;
};
console.log(getUser("Amit"));
console.log(getUser());
//Q4. Use Destructuring & Spread Operator
//Create a function printUserDetails(user: User): void that logs user details using object destructuring.
//Here I have Destructuring the already created Interface as per first question.
function printUserDetails(user) {
    const { id, name, email } = user, other = __rest(user, ["id", "name", "email"]);
    console.log(`My ID: ${id}`);
    console.log(`My Name: ${name}`);
    console.log(`My Email is: ${email}`);
    console.log(`Other Details: `, Object.assign({}, other));
}
const user = {
    'id': 2,
    'name': 'Milan',
    'email': "milan@gmail.com",
    'age': 40,
};
printUserDetails(user);
