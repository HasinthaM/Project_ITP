import { useNavigate } from "react-router-dom"; // Hook
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <img src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background" style={{ width: "100%", height: "100%", objectFit: "cover", position: 'absolute', top: 0, left: 0, zIndex: -1 }} />

      <header className="app-header">
      <h1 className="app-title" style={{ fontSize: "100px", color: "white", fontWeight: "bold" }}>WELCOME</h1>
        <div className="button-container">
          <button
            style={{color:"AF8260"}}
            className="app-button users-button"
            onClick={() => navigate("/user")}
          >
            Users
          </button>
          <button
            className="app-button feedback-button"
            onClick={() => navigate("/feedback")}
          >
            Feedback
          </button>
          <button
            className="app-button admin-button"
            onClick={() => navigate("/Admin")}
          >
           Admin
          </button>
        </div>
      </header>
    </div>
  );

  
}

export default App;
