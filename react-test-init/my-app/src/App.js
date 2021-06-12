import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = (e) => {
    console.log("enviado");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <botton type="button" id="enviar_form" onClick={handleClick()}>Enviar</botton>
      </header>
    </div>
  );
}

export default App;
