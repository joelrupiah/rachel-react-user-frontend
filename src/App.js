import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetails from './pages/projectdetails/ProjectDetails'
import Home from './pages/home/Home'

import './app.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route path="/project-details" element={<ProjectDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
