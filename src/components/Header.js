import {Logo_URL} from "../Utils/constant";
const Header=()=>(
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
      </ul>
  </div>
  </div>
);
export default Header;