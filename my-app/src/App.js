import logo from './logo.svg';
import './App.css';
import {Message} from './components/Message'

const myText = "text from app";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Message  myString="bye" text={myText} />
      </header>
    </div>
  );
}

export default App;
