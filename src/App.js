import { useState } from 'react';
import './App.css';


function App() {
  let [likes, setLikes] = useState(0);

  return (
    <div className="App">
      <div className="Home-nav">
        안녕
      </div>
      <h4><span onClick={() => { setLikes(likes + 1) }}>👍🏻</span>{likes}</h4>
    </div >
  );
}

export default App;
