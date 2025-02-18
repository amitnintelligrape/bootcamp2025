import React from 'react';
import './styles/index.css'
import HelloWorld from './components/HelloWorld';
import MyFunction from './components/FunctionalComp';
import FirstClass from './components/ClassComp';
import Counter from './components/Counter';
import Parent from './components/Parent';
import TodoList from './components/TodoList';
import ToggleButton from './components/Toggle';
function App() {
  return (
    <div className="App">
      <HelloWorld  />
      <MyFunction name="Amit" />
      <FirstClass name="Milan" />
      <Counter />
      <Parent />
      <TodoList/>
      <ToggleButton />
    </div>
  );
}

export default App;
