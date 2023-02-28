import "./App.css";
import UserMenu from "./components/UserMenu";
import Button from "./components/Button";


function App() {
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
    </div>
  );
}

export default App;
