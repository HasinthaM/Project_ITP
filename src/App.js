import { useNavigate } from 'react-router-dom'; //Hook
import './App.css';
import E_table from './pages/Employee/E_table';
import Employee from './pages/Employee/Employee';
import Dashboard from './components/Employee/Dashboard';
import Navbar from './components/Employee/Navbar';

function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
        {/* <button className='users-button' onClick={() => navigate('/users')}>Users</button>
        <button className='employee-button' onClick={() => navigate('/employee')}>Employee</button>
        <button className='dashboard-button' onClick={() => navigate('/dashboard')}>Dashboard</button> */}
       
      </header>
    </div>
  );
}

export default App;
