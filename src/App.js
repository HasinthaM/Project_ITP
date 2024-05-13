import { useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
