import React, { useState } from "react";
import DashBoard from "./components/DashBoard";
import Preference from "./components/Preference";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function getToken(userToken){
localStorage.getItem(JSON.stringify(userToken()))
}

function setToken(userToken){
localStorage.setItem(JSON.stringify(userToken()))
}


function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="wrapper" style={{padding:'20px'}}>
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="preference" element={<Preference />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
