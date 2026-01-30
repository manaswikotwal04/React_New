import { useEffect, useState } from "react"
import { MENU_API_URL } from "./constant";

const useRestaurantMenu=(id)=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    async function fetchMenu(){
        const data=await fetch(MENU_API_URL+id);
        const json=await data.json();
        setResInfo(json);
    }
    return resInfo;
}
    
    export default useRestaurantMenu;