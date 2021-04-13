import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routes from './routes'
import './App.css'

function App() {
  return (
      <BrowserRouter>
        <div>
          <div>
            <Routes/>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
