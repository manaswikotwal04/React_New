
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";
import {Common_URL} from "../Utils/constant";
const ItemList=({item})=>{
    console.log("ItemList Props:", item);
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        dispatch(addItem(item));
        
    }
    return <div>
        
            {item.map(item =>(
                <div key={item.card.info.id} className="m-2 p-2 border-b-2 border-gray-300 text-left  flex justify-between">
                
                <div className="w-9/12">
            <div className="py-2 text-xl">
                <span>{item.card.info.name}</span>
                <span>- ₹ {  item.card.info.price/100} </span>
                
            </div>
            <p className="text-lg">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
            <div className="absolute pt-27 px-15">
                <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={() => handleAddItem(item)} >Add +</button>
            </div>
                <img className="w-50" src={Common_URL+item.card.info.imageId}></img>
                
            </div>
            </div>
            
            ))}
        
    </div>
}
export default ItemList;