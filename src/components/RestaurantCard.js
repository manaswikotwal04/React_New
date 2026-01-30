import { useContext } from "react";
import { Common_URL } from "../Utils/constant";
import UserContext from "../Utils/UserContext";

const RestaurantCard = ({ resdata }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resdata.info;
  const {loggedInUser  }=useContext(UserContext);
  const fallbackImage =
    "https://images2.alphacoders.com/101/thumb-1920-1019901.jpg"; // you can replace this

  return (
    <div className="m-4 p-4 w-[200] rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img
        src={Common_URL + cloudinaryImageId}
        onError={(e) => (e.target.src = fallbackImage)}
       
        className="rest-logo"
      />
      <h3 className="font-bold py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating}</h4>
      <h5>{costForTwo}</h5>
      <h5>{sla?.deliveryTime} min</h5>
      <h5>{loggedInUser} min </h5>
    </div>
  );
};

export default RestaurantCard;
