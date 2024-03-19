import { useNavigate } from 'react-router-dom'; //Hook
import './App.css';

function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <button className='users-button' onClick={() => navigate('/users')}>Users</button>
        <button className='home-button' onClick={() => navigate('/home')}>P_home</button>
      </header>
    </div>
  );
}

export default App;
