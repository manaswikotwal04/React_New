import  { useState } from "react";
const User=(props)=>{
    const [count]=useState(0);
     const [count1]=useState(1);
     useEffect(()=>{

     },[]);
     
    return(
     <div id="User">
     <h1>Count: {count}</h1>
     <h1>count:{count1}</h1>
        <h2>{props.name}</h2>
        <h3>Jalgaon</h3>
        <h3>8459127281</h3>
     </div>
    );
}
export default User;