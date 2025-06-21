import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { About, Contact, Projects } from "./pages";
import "./index.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
