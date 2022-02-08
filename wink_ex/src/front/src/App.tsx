import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputField';

export const App: React.FC = () => {
  const [book, setBook] = useState<string>("")
  console.log(book);
  
  return (
    <div className="App">
      <span className="heading">BookFinder</span>
      <InputFeild book={book} setBook={setBook}/>
    </div>
  );
}

export default App;
