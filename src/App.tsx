import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/login";
import { Home } from "./Pages/home";
import { NewTask } from "./Pages/new-task";
import { Information } from "./Pages/information";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<Home />} />
        <Route path="/new-task" element={<NewTask />} />
      </Routes>
    </Router>
  );
}

export default App;
