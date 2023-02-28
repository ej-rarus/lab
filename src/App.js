import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';


function App() {
  let [likes, setLikes] = useState(0);
  let [modal, setModal] = useState(false);
  return (
    <div className="App">
      <div className="Home-nav">
        안녕
      </div>
      <h4><span onClick={() => { setLikes(likes + 1); modal === true ? setModal(false) : setModal(true); }}>👍🏻</span>{likes}</h4>
      {
        modal === true ? <Modal /> : null
      }
    </div >
  );
}

export default App;
