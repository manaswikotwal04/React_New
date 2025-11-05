import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import shimmer from "./shimmerui";      

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204&lng=73.8567&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("API Response:", json);

    // ✅ Correct path (as per your JSON)
    const restaurants =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];


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
      (restaurant) => restaurant?.info?.avgRating > 4
    );

    setFilterRestaurant(filteredData);
         }}>
          Top Rated
        </button>
      </div>

      <div className="res-container">
        {
          filterrestaurant.map((restaurant) => (
            <RestaurantCard
              key={restaurant?.info?.id}
              resdata={restaurant}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
