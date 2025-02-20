import { useState } from "react";

const Login = ()=> {
    const [loggedIn, setLoggedIn] = useState(true);

    const login = ()=>{
        setLoggedIn(!loggedIn)
    }
    return(
        <>  
            <h2>Day 3 React</h2>
            <h2>Q1. Create a component that shows different content based on whether the user is logged in or not (e.g., "Welcome back" or "Please log in"). Use a state hook to toggle the logged-in state and update the UI accordingly.
            </h2>
            <button onClick={login}>{loggedIn ? 'Login' : 'Logout'}</button>
            {loggedIn ? 
            <h3>Please log in</h3> :
            <h3>Welcome back</h3>
            }
        </>
    );
}

export default Login;