import RestaurantCard from "./RestaurantCard";
import restaurantList from "../Utils/Moc_Data";


const Body=()=>{
  return(
    <div className="body">
      <div className="search">search</div>
      <div className="res-container"> 
     {
      restaurantList.map((restaurant)=>{
        return <RestaurantCard key={restaurant.data.id} resdata={restaurant}/>;
      })
     }

      
      
      </div>
    </div>
  );
}

export default Body;