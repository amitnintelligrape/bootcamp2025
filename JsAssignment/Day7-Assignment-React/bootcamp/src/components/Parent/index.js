import { useState } from 'react';

const Parent = () =>{
    const [message, setMessage] = useState("Hello this the parent message");
    return(
        <>
            <Child message={message}  />
        </>
    );
}
const Child = ({message}) =>{
   
    return(
        <>
            <h3 >{message}</h3>
        </>
    );
}

export default Parent;