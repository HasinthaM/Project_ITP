import { useNavigate } from 'react-router-dom'; //Hook
import './App.css';

function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
       
        <button className='ticket-button' onClick={() => navigate('/ticket')}>Ticket</button>
        <button className='faq-button' onClick={() => navigate('/faq')}>FAQ</button>
        <button className='email-button' onClick={() => navigate('/email')}>Contact Us</button>
      </header>
    </div>
  );
}

export default App;
