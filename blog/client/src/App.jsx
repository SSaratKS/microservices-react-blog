import { useState } from 'react';
import './App.css';
import PostCreate from './postCreate';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App container">
      <h1> Create Post</h1>
      <PostCreate />
    </div>
  );
}

export default App;
