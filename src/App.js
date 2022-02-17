import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Summary from "./Pages/Summary";
import Howto from "./Pages/Howto";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/howto" element={<Howto />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
