import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';


function App() {
  let [likes, setLikes] = useState(0);

  return (
    <div className="App">
      <div className="Home-nav">
        안녕
      </div>
      <h4><span onClick={() => { setLikes(likes + 1) }}>👍🏻</span>{likes}</h4>
      <Modal></Modal>

    </div >
  );
}

export default App;
