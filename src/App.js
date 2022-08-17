import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>RUNNING!!!!!!</p>
        <button
          onClick={() => {
            window.browserViewAPI.openBrowserView('https://www.youtube.com');
          }}
        >
          CLICK ME FOR YOUTUBE!!!!!!
        </button>
        <button
          onClick={() => {
            window.browserViewAPI.openBrowserView('https://www.google.com');
          }}
        >
          CLICK ME FOR GOOGLE!!!!!!
        </button>
      </header>
    </div>
  );
}

export default App;
