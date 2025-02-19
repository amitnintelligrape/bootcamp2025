import React, { useState } from 'react';
const Counter = ()=>{
    const [count, SetCount] = useState(0);
    const UpdateValue = (type) =>{
        SetCount(type === 'increment' ? count+1 : count > 0 ? count-1 : count)
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={() => UpdateValue('increment') }>Increment</button>
            <button onClick={() => UpdateValue('decreament') }>Decrement</button>
        </>
    )
}

export default Counter;