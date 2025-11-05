import {Logo_URL} from "../Utils/constant";
import { useState } from "react";
const Header=()=>{

  const [btnNameReact,setbtnNameReact]=useState("Login");
  return (
    <div className="header" >
      <div className="logo-container">
        <img className="logo" src={Logo_URL}></img>
      </div>
  <div className="nav-items">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Cart</li> 
      <button className="login-btn" onClick={()=>{
        btnNameReact==="Login"?
        setbtnNameReact("Logout"):
        setbtnNameReact("Login");
        console.log("Button clicked");
      }}>{btnNameReact}</button>
      </ul>
  </div>
  </div>
);
}
export default Header;