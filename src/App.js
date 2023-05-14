import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Resume from "./Pages/Resume/Resume";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
