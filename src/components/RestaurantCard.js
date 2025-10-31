import { Common_URL } from "../Utils/constant";
const RestaurentCard=(props)=>{
  const {resdata}=props;
  const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime}=resdata?.data;
  return(
    <div className="res-card" style={{ backgroundColor: "#efefefff" }} >
    <img 
    className="rest-logo"alt="rest-logo" src={Common_URL+cloudinaryImageId} height={130}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h5>{costForTwo/100}</h5>
      <h5>{deliveryTime}</h5>

    </div>
  );
}
export default RestaurentCard;