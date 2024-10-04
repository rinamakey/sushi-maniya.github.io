import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../Redux/CartSlice";
import dataDishes from "../../data/dataDishes";

const CartItem = ({cartItem}) => {

    const dishes = dataDishes.find(item=>item.id === cartItem.dishId);
    console.log(dishes)
    console.log(cartItem)
    const dispatch=useDispatch();
    return(
        <div>
            <h5>{dishes.name} - {cartItem.quantity} порция(и) </h5> 

            <p>Цена {dishes.price* cartItem.quantity} руб.</p> 

            <span onClick={()=> dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
                <img className="icon" src="https://cdn-icons-png.freepik.com/256/16973/16973571.png?ga=GA1.1.1479483188.1702672119&semt=ais_hybrid" alt="delete"/>
            </span>
      </div>
    )
}
export default CartItem;