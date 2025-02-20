import React, { useState } from 'react';
import { useUser } from './index';

const Logins = () => {
  const { login, setUser } = useUser(); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loggedin, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (name && email) {
      login(name, email);
      setLoggedIn(!loggedin); 
    }
  };
  const logout = () => {
    setUser(null);
    setLoggedIn(false); 
    setName('');
    setEmail('');
  };
  return (
    <>
      {!loggedin ?
      (<div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <button onClick={handleLogin}>Login</button>
      </div>):(
        <button onClick={logout}>Logout</button>
      )
      }
      
    </>
  );
};

export default Logins;