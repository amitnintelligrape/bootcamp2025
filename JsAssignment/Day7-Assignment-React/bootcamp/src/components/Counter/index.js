import React, { useState } from 'react';
const Counter = ()=>{
    const [count, SetCount] = useState(0);
    const Increment = ()=>{
        SetCount(count+1)
    }
    const Decrement = () =>{
        if(count > 0){
            SetCount(count-1)
        }
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </>
    )
}

export default Counter;