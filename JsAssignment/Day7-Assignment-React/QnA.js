//Day 1 React JS

//Q1. Create a simple React app that displays "Hello, World!" on the screen.
//Ans: Created under Component.

//Q2. How to set up a React project and render a simple component.
//Ans. First We have to install a node then using npx create-react-app my-proj command we can install a React project with name "my-proj" after installing the react project we have to create a component under src/components and then we have to call it in app.js.

//Q3. Write a functional component that displays the text "Functional Component" and a class component that displays the text "Class Component". Then render both components in the App component.

//Ans. Created under src/component with name FunctionalComp and ClassComp

//Q4. Given the following code, identify the issue and fix it:
    const element = <h1>Hello, World!;</h1>;

//Ans. In above code the semicolon is a javaScript syntax to terminate the statement. But in the JSX used semicolon inside the content of h1 is not valid. So below is the correct syntax:
    const element = <h1>Hello, World!</h1>;


//Day 2 React JS

//Q1. Create a counter component with a button.
//Ans. Create under src/component with name Counter

//Q2. Create a counter with increment and decrement buttons.
//Ans, User the same component of Q1. and write a funtion for increment and decrement as well as added the condition for decrement that decrement count not below to '0' like in minus as per provided information during session.

//Q3. Create a parent() component that has a message in its state.
//Ans. Create under src/component with name Parent and there I have created two function in it with name Parent and Child and added message through state.

//Q4. Create a TodoList component that stores a list of to-dos in its state.
//Ans.Create under src/component with name TodoList and write their add and show todolist based on button click and use useState.

//Q5. Create a component that toggles between two views: "Login" and "Logout".
//Ans. Create under src/component with name Toggle and write a click event and toggle as well as changes data with single button and also used useState.

