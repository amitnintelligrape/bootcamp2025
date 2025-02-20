import React, { useContext, useState, createContext} from 'react';

const UserContext = createContext();


export const UserProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const login = (name, email) => {
        setUser({ name, email });
    };
    return(
        <>
            <UserContext.Provider value={{user, login, setUser}}>
               {children}
            </UserContext.Provider>
        </>
    )
}

export const useUser = ()=>{
    return useContext(UserContext)
}




