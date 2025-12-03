import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
  constructor(props){
    super(props);
    console.log("About Constructor");
  }
  componentDidMount(){
    console.log("About Component Mounted");
  }
  render(){
  return (
   console.log("About Component Rendered"),
    <div>
      <h1>About Page</h1>
      
      <UserClass name={"Akshay class"} location={"Jalgaon"} phone={"8459127281"}  />
     
    </div>
  );
  }
};

export default About;
