import { useState } from "react";

const ToggleButton = () =>{
    const [isLoggedin, SetLoggedin] = useState(true)

    const ToggleButton = () =>{
            SetLoggedin(!isLoggedin)
    }
    return(
        <>
            <button onClick={ToggleButton}>{isLoggedin ? 'Login': 'Logout'}</button>
        </>
    );
}

export default ToggleButton;