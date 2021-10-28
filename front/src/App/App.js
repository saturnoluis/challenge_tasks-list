import { AppProvider } from './provider';
import Main from '../components/Main';

import './App.scss';

function App() {
  return (
    <AppProvider>
      <div className="App dark">
        <header className="App__header">
          <h1>My Tasks</h1>
        </header>
        <Main />
        <footer className="App__footer">
          <a
            rel="noreferrer"
            target="_blank"
            href="http://github.com/saturnoluis">

              github/saturnoluis
          </a>
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;