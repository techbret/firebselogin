import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ParentLogin from "./components/ParentLogin";
import StudentLogin from "./components/StudentLogin";
import Research from "./components/Research";
import ForParents from "./components/ForParents";
import Approach from "./components/Approach";
import SignUp from "./components/SignUp";


function App() {
  
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/parent-login" element={<ParentLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/research" element={<Research />} />
          <Route path="/parents" element={<ForParents />} />
          <Route path="/our-approach" element={<Approach />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    </div>
  );
}

export default App;
