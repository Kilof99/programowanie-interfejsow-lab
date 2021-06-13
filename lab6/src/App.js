import logo from './logo.svg';
import './App.css';
import  {BrowserRouter as Router,  NavLink} from "react-router-dom";
import Main from './components/Main';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Main/>
      </div>
    </Router>
  );
}

export default App;
