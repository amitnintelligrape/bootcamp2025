//Q1.  Define an interface User with the following properties: 
// id(number), name(string), email(string), age(number optional)

interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
}

//Q2. Create a class UserManager with:
    // A private array users: User[] to store user data.
    // A method addUser(user: User): void that adds a new user.
    // A method removeUser(id: number): void that removes a user by ID.
    // A method getUser(id: number): User | undefined that retrieves a user by ID.
    // A method getAllUsers(): User[] that returns all users.

class User {
    constructor(id:number, name) {
        this.id = id;
        this.name = name;
    }
}
class UserManager {
    #users = [];

    addUser(usr) {
        const index = this.#users.findIndex(user => user.id === usr.id);
        if(index == -1){
            if (usr instanceof User) {
                this.#users.push(usr);
            }
        }else {
            console.log(`Invalid user data. ${usr.id} and name ${usr.name}`);
        }
    }
  
    removeUser(id) {
        const index = this.#users.findIndex(user => user.id === id);
        console.log(index);
        if (index !== -1) {
            this.#users.splice(index, 1);
            console.log(`User with ID ${id} has been removed.`);
        } else {
            console.log(`User with ID ${id} not found.`);
        }
    }

    getUser(id) {
      return this.#users.find(user => user.id === id);
    }
  
    getAllUsers() {
      return this.#users;
    }
  }

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

const getUser = (name: string = "Guest"): string =>{
    return `Hi, ${name}`;
}

console.log(getUser("Amit"));
console.log(getUser());

//Q4. Use Destructuring & Spread Operator
    //Create a function printUserDetails(user: User): void that logs user details using object destructuring.

//Here I have Destructuring the already created Interface as per first question.

function printUserDetails(user: User): void {
    const {id, name, email,...other} = user;

    console.log(`My ID: ${id}`);
    console.log(`My Name: ${name}`);
    console.log(`My Email is: ${email}`);
    console.log(`Other Details: `, {...other});
}
const user = {
    'id':2,
    'name':'Milan',
    'email':"milan@gmail.com",
    'age': 40,
}
printUserDetails(user);