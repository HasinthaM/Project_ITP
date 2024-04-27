import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <button className="users-button" onClick={() => navigate("/Users")}>
          Users
        </button>
        <button className="users-button" onClick={() => navigate("/R_Booking")}>
          R_Booking
        </button>
        <button className="Admin" onClick={() => navigate("/Adminhome")}>
         Admin
        </button>
      </header>
    </div>
  );
}

export default App;
