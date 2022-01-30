import { NavLink, useHistory } from 'react-router-dom';
import './App.css';
import Routes from './routes';
import { logout } from './Services/utils';

function App() {
  const history = useHistory();
  function handlelogout(){
    logout();
    history.push("/");
  }
  return (
    <div className='App'>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/register">Registrar</NavLink>
            </li>
            <li>
              <button onClick={handlelogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
      <Routes />
    </div>
  );
}

export default App;
