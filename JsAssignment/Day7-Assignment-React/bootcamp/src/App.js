import React from 'react';
import './styles/index.css'
import HelloWorld from './components/HelloWorld';
import MyFunction from './components/FunctionalComp';
import FirstClass from './components/ClassComp';
import Counter from './components/Counter';
import Parent from './components/Parent';
import TodoList from './components/TodoList';
import ToggleButton from './components/Toggle';
import Login from './components/Login';
import {ThemeProvider, useTheme} from './components/ThemeContext';
import ThemeToggler from './components/ThemeContext/ThemeToggler';
import {UserProvider} from './components/UserContext';
import Logins from './components/UserContext/logins';
import UserProfile from './components/UserContext/UserProfile'
const ThemedComponent = ()=>{
  const { theme } = useTheme();
  const themeStyle={
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
  }
  return (
    <div style={themeStyle}>
      <h1>{theme} Theme</h1>
      <p>The current theme is {theme}</p>
    </div>
  );
}
function App() {
  return (
    <div className='App'>
      <HelloWorld  />
      <MyFunction name="Amit" />
      <FirstClass name="Milan" />
      <Counter />
      <Parent />
      <TodoList/>
      <ToggleButton />
      <Login />
      <h2>Q2. Create a simple ThemeContext that toggles between light and dark themes. Implement a ThemeProvider that supplies the current theme, and a ThemeToggler component that switches between themes. Make sure that the theme changes dynamically in child components.</h2>
      <ThemeProvider>
        <ThemedComponent/>
        <ThemeToggler/>
      </ThemeProvider>
      <h2>Q3. Create a UserContext that holds information about the logged-in user (e.g., name and email). Create a UserProfile component that displays the user’s information, and a Login component that updates the user’s data via context when the user logs in.</h2>
      <UserProvider>
        <UserProfile/>
        <Logins/>
      </UserProvider>
    </div>
  );
}

export default App;
