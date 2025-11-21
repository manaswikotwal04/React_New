import { useEffect, useState } from "react";
import shimmer from "./shimmerui";
import { useParams } from "react-router";
import { MENU_API_URL } from "../Utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();

  const fetchMenu = async () => {
    try {
      const res = await fetch(MENU_API_URL + id);
      const json = await res.json();
      console.log("Menu Data:", json);
      setResInfo(json);
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  // ⭐ SAFE Extraction of Restaurant Info
  const restaurantInfo =
    resInfo?.data?.cards?.find((c) => c.card?.card?.info)?.card?.card?.info;

  const name = restaurantInfo?.name;
  const cuisines = restaurantInfo?.cuisines;
  const costForTwo = restaurantInfo?.costForTwo;

  // ⭐ SAFE Extraction of itemCards
  const regularCards =
    resInfo?.data?.cards?.find((c) => c.groupedCard)?.groupedCard
      ?.cardGroupMap?.REGULAR?.cards;

  const itemCards =
    regularCards
      ?.find((c) => c.card?.card?.itemCards)
      ?.card?.card?.itemCards || [];

  console.log("Item Cards:", itemCards);

  if (!resInfo) return shimmer();

  return (
    <div style={{ padding: "30px" }}>
      <h1>{name}</h1>

      <h2>{cuisines?.join(", ")}</h2>
      <h2>{costForTwo}</h2>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {(item.card.info.price ?? item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
