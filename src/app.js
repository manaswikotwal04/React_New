import Header from "./components/Header.js";
import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body.js";
const stylecard={
  backgroundColor:"#efefefff",
}




const Applayout=()=>{
return<div className="app">
   <Header/>
   <Body/>

</div>;
    
}

const jsxheading=<h1 id="heading">Namaste React using JSX</h1>;
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);