
import React from "react";
import Login from "./components/Login";
import "./Styles/app.css"
import Register from "./components/Register";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
function App() {
  return (
    <div className="App">
      
      {/* <Home/> */}
      <Profile/>
      {/* <div style={{height:'100vh',display:'flex',alignItems:'center'}}> */}
        {/* <Register/> */}
        {/* <Login/> */}
      {/* </div> */}
      
      
    </div>
  );
}

export default App;
