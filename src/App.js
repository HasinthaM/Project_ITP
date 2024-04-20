import { useNavigate } from 'react-router-dom'; //Hook
import './App.css';

function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <button className='manager-dash' onClick={() => navigate('/pdashboard')}>Dashboard</button>
        <button className='p-home' onClick={() => navigate('/phome')}>Package Home</button>
        <button className='o-home' onClick={() => navigate('/o-manager')}>Operation Manager</button>

      </header>
    </div>
  );
}

export default App;
