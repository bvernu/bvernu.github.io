import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Iridescence from "./Components/Iridescence";
import Navbar from "./Components/NavBar";
import Home from "./Components/Home";
import AboutPage from "./Components/AboutPage";
import ProjectsPage from "./Components/ProjectsPage";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Background */}
        <div className="fixed inset-0 z-0">
          <Iridescence
            color={[0.8, 0.35, 0.3]}
            mouseReact={false}
            amplitude={0.15}
            speed={0.3}
          />
        </div>

        {/* Navbar on all pages */}
        <Navbar />

        {/* Routes */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
