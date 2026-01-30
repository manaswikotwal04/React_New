import {Logo_URL} from "../Utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
  const {loggedInUser}=useContext(UserContext);
  console.log("Logged in user is:",loggedInUser);
  const [btnNameReact,setbtnNameReact]=useState("Login");
  const cartItems=useSelector((store)=>store.cart.items);
  console.log("Cart Items in Header:",cartItems);

  return (
    <div className="flex justify-between bg-orange-50 shadow-lg" >
      <div className="logo-container">  
        <img className="w-50 h-40" src={Logo_URL}></img>
      </div>
  <div className="flex items-center">
    <ul className="flex p-4">
      <li className="px-4"><Link to="/">Home</Link></li>
      <li className="px-4"><Link to="/about">About</Link></li>
      <li className="px-4"><Link to="/contact">Contact</Link></li>
      <li className="px-4"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
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