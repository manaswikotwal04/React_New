import { Common_URL } from "../Utils/constant";

const RestaurantCard = ({ resdata }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resdata.info;

  return (
    <div className="res-card">
      <img src={Common_URL + cloudinaryImageId} className="rest-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating}</h4>
      <h5>{costForTwo}</h5>
      <h5>{sla?.deliveryTime} min</h5>
    </div>
  );
};

export default RestaurantCard;
