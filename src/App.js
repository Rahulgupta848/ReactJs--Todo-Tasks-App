import logo from './logo.svg';
import './App.css';
import Input from './components/Input'
import { useState } from 'react';
function App() {
  return (
    <div>
      <div className='title'>Rahul's Todo Task List...</div>
      <Input></Input>
    </div>
  );
}

export default App;
