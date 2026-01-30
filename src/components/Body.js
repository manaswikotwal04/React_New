import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import shimmer from "./ShimmerUI";  
import {Link} from "react-router-dom";    
import {useOnlineStatus} from "../Utils/useOnlineStatus";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Body = () => {
  const [listofRestaurants, setRestaurants] = useState([]);
  const [filterrestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
console.log("Body Rendered",listofRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurants"
    );
    console.log(data);
    const json = await data.json();
    console.log("API Response:", json);

    // ✅ Correct path (as per your JSON)
    const restaurants =
      json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];


    setRestaurants(restaurants);
    setFilterRestaurant(restaurants);
  };
   
const onlineStatus=useOnlineStatus();
if(onlineStatus==false){
  return <h1>🔴 Offline, Please check your internet connection!!</h1>;
}

  return listofRestaurants.length === 0 ? (shimmer()) : (
    <div className="body">
      <div className="filter flex">
      <div className="search m-4 p-4 ">
        <input type="text" className=" border border-solid" value={searchText}
        onChange={(e)=>{
          setSearchText(e.target.value);
        }} />
        <button className="px-4 py-0.5 m-4 bg-gray-200 rounded-lg" onClick={()=>{
          const filterrestaurant=listofRestaurants.filter(
            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilterRestaurant(filterrestaurant);
        }}>Search</button>
       
        <button className="px-4 py-0 m-4 bg-gray-200"
         onClick={()=>{const filteredData = listofRestaurants.filter(
      (restaurant) => restaurant?.data?.avgRating > 4
    );

    setFilterRestaurant(filteredData);
         }}>
          Top Rated
        </button>
       </div>
      </div>

      <div className="flex flex-wrap ">
        {
          filterrestaurant.map((restaurant) => (
            <Link key={"listRestaurantMenu/"+restaurant?.info?.id} to={"listRestaurantMenu/"+restaurant?.info?.id}><RestaurantCard
              key={restaurant?.info?.id}
              resdata={restaurant}
            /></Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;
