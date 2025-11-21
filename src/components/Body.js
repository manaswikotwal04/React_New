import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import shimmer from "./shimmerui";  
import {Link} from "react-router-dom";    

const Body = () => {
  const [listofRestaurants, setRestaurants] = useState([]);
  const [filterrestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
console.log("Body Rendered");
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



  return listofRestaurants.length === 0 ? (shimmer()) : (
    <div className="body">
      <div className="filter">
      <div className="search">
        <input type="text" className="search-box" value={searchText}
        onChange={(e)=>{
          setSearchText(e.target.value);
        }} />
        <button onClick={()=>{
          const filterrestaurant=listofRestaurants.filter(
            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilterRestaurant(filterrestaurant);
        }}>Search</button>
      </div>
        <button className="filter-btn"
         onClick={()=>{const filteredData = listofRestaurants.filter(
      (restaurant) => restaurant?.data?.avgRating > 4
    );

    setFilterRestaurant(filteredData);
         }}>
          Top Rated
        </button>
      </div>

      <div className="res-container">
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
