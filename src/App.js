import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';


function App() {

  const navigate = useNavigate();
  return (
    <div className="App1">
      <header className="App-header1">
        <h1>Package Managemnt</h1>
        <button className='manager-dash' onClick={() => navigate('/pdashboard')}>Package Manager</button>
        <button className='p-homeI' onClick={() => navigate('/phome')}>User</button>
        <button className='o-home' onClick={() => navigate('/o-manager')}>Operation Manager</button>

      </header>
    </div>
  );
}

export default App;
