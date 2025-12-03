import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props); 
        this.state={
            UserInfo:{
                name:"Dummy Name",
                location:"Dummy Location",  
                avatar_url:"Dummy Avatar"
            }
        };
       console.log("UserClass Constructor");
    }
    async componentDidMount(){
        console.log("UserClass Component Mounted");
        const data=await fetch("https://api.github.com/users/manaswikotwal04");
        const json=await data.json();
        this.setState({
            UserInfo:json,
        });
        console.log(json);
    }
    componentDidUpdate(){
        console.log("UserClass Component Updated");
    }
    componentWillUnmount(){
        console.log("UserClass Component Unmounted");
    }
    render(){
        console.log("UserClass Component Rendered");
        const {name,location,avatar_url}=this.state.UserInfo;
        
         return(
            <div className="UserClass">
            <img src={avatar_url} alt="avatar" />
                <h2>{name}</h2>
                <h3>{location}</h3>

            </div>
        );
    }
}
export default UserClass;