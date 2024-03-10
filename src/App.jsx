import { useState } from 'react'
import './App.css'
import { Login } from "./login/index";
import { SignUp } from "./signup/signup";
import { Dashboard } from "./dashboard/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// import { Slide, ToastContainer } from "react-toastify";

function App() {
  const [response, setResponse] = useState({});
  
  return (
    <>
      {/* <Login/>
      <SignUp/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login setResponse={setResponse}/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard response={response} />} />
          {/* <Route path="/Dashboard" element={<Dashboard response={response} />} />
          <Route path="/Attendence" element={<Attendence setResponse={setResponse} />} />
          <Route path="/Marks" element={<Marks />} /> */}

        </Routes>
      </Router>
      {/* <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
        
      /> */}
    </>
  );
}


export default App
