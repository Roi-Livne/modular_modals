import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Modular React Modals</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Choose a modal to open
        </p>
        <button>Sign in</button>
        <button>Sign up</button>
        <button>Buy now</button>
        <button>Credits</button>
      </header>
    </div>
  );
}

export default App;
