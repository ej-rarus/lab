import "./App.css";
import UserMenu from "./components/UserMenu";
import Button from "./components/Button";
import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';


function App() {
  let [likes, setLikes] = useState(0);
  let [modal, setModal] = useState(false);
  return (
    <div className="App">
      <div className="Home-nav">
        <div className="Logo">Art-ZIP</div>
        <div className="Menu-wrapper">
          <div className="Menu">공연정보</div>
          <div className="Menu">공연시설정보</div>
          <UserMenu/>
          <Button></Button>
        </div>
      </div>
      <h4><span onClick={() => { setLikes(likes + 1); modal === true ? setModal(false) : setModal(true); }}>👍🏻</span>{likes}</h4>
      {
        modal === true ? <Modal /> : null
      }
    </div >
  );
}

export default App;
