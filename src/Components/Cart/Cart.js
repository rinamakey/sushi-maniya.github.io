import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../Redux/CartSlice";


const Cart =()=>{

const cartItems = useSelector(getCartItems);
const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
           
            <span className="cart"> Корзина: 
            
            <img className="cartIcon" src="https://cdn-icons-png.freepik.com/256/806/806798.png?ga=GA1.1.1479483188.1702672119&semt=ais_hybrid"alt="foto"/>
            </span>
            <h3 className="total"> Общая сумма: {totalPrice} Pуб.</h3>
            {cartItems.map((cartItem,item) => <CartItem key={item} cartItem={cartItem}/> )}
        </div>
    )
}
export default Cart;   