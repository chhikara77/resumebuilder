import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Howto from "./Pages/Howto";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Experience from "./Pages/Experience";
import Experienceform from "./Pages/Experienceform";
import Educationform from "./Pages/Educationform";
import Skillsform from "./Pages/Skillsform";
import Contact from "./Pages/Contact";
import Summary from "./Pages/Summary";
import Finalize from "./Pages/Finalize";
import Expsummary from "./Pages/Expsummary";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/expsummary" element={<Expsummary />} />
        <Route path="/finalize" element={<Finalize />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/skillsform" element={<Skillsform />} />
        <Route path="/educationform" element={<Educationform />} />
        <Route path="/experienceform" element={<Experienceform />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/howto" element={<Howto />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
