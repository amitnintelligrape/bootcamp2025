import { useState } from "react";

const ToggleButton = () =>{
    const [isLoggedin, SetLoggedin] = useState(true)

    const ToggleButton = () =>{
            SetLoggedin(!isLoggedin)
    }
    return(
        <>
            <button onClick={ToggleButton}>{isLoggedin ? 'Login': 'Logout'}</button>
            {isLoggedin ? (
                <div className="content">
                   <h3>Login</h3> 
                   <p>Loggedin User Content Here</p>
                </div>
            ):(
                <div className="content">
                    <h3>Logout</h3> 
                    <p>LoggedOut User Content Here</p>
                </div>
            )}
        </>
    );
}

export default ToggleButton;