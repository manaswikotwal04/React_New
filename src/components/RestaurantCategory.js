import ItemList from "./ItemList";
import React from "react";
const RestaurantCategory = ({data,showitem,setShowIndex})=>{
    console.log("RestaurantCategory Props:", data); 
   
    const handlebutton=()=>{
       setShowIndex();
    }
    return (
<div>
    <div className="  w-6/12 mx-auto my-4 p-4  bg-gray-100 rounded-lg">
    <div className="flex justify-between cursor-pointer  font-bold text-xl border-b-2 border-gray-300 pb-2  " onClick={handlebutton}>
    <span>{data.title}-{data.itemCards?.length}</span>
    <span>⬇️</span>
    
    </div>

   {showitem && <ItemList item={data.itemCards} />}
    </div>
</div>

    );
}
export default RestaurantCategory;