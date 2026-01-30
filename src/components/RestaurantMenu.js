import { useEffect, useState } from "react";
import shimmer from "./ShimmerUI";
import { useParams } from "react-router";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  
  
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);

 const [showIndex,setShowIndex]=useState(0);

 

  const restaurantInfo =
    resInfo?.data?.cards?.find((c) => c.card?.card?.info)?.card?.card?.info;
  
  const {name,cuisines,costForTwo}=restaurantInfo||{};


  const regularCards =
    resInfo?.data?.cards?.find((c) => c.groupedCard)?.groupedCard
      ?.cardGroupMap?.REGULAR?.cards;

  const itemCards =
    regularCards
      ?.find((c) => c.card?.card?.itemCards)
      ?.card?.card?.itemCards || [];

  console.log("Item Cards:", itemCards);
  const  categories= resInfo?.data?.cards?.find((c) => c.groupedCard)?.groupedCard
      ?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
console.log("Categories:",categories);
  if (!resInfo) return shimmer();

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl ">{name}</h1>

      <p className="font-bold text-lg">{cuisines?.join(", ")}-{costForTwo}</p>
      {categories.map((category,index)=>(
        <RestaurantCategory
         key={category?.card?.card?.title} 
         data={category?.card?.card}
          showitem={index===showIndex?true:false}
          setShowIndex={()=>setShowIndex(index)}
         />))}

    </div>
  );
};

export default RestaurantMenu;
