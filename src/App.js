import logo from './logo.svg';
import './App.css';
import  {BrowserRouter as Router,  NavLink} from "react-router-dom";
import Main from './components/Main'

function App() {
  return (
    <Router>
      <header><h1>Lista studentów</h1></header>
      <main>

        <nav>
            <NavLink to="/" exact>Lista studentów</NavLink>
            <NavLink to="/new">Dodaj studenta</NavLink>
        </nav>

        <Main />

      </main>
    </Router>
  );
}

export default App;
