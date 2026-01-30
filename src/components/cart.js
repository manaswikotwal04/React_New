import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Utils/cartSlice";
import ItemList from "./ItemList";
const Cart = () => {   
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart Page</h1>
            <button className="bg-red-500 text-white px-4 py-2 rounded m-4" onClick={handleClearCart}>Clear Cart</button>  
            <h1>{cartItems.length===0?"Cart is Empty":`Cart Items: ${cartItems.length}`}   </h1>
            <div>
                <ItemList item={cartItems}></ItemList>
            </div>
        </div>
    );
}
export default Cart;