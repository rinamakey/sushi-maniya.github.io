
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { addItemToCart } from "../../Redux/CartSlice";
import { useDispatch } from "react-redux";



const DishFoto =({dishfoto})=>{

const [quantity,setQuantity] = useState(1);
const dispatch = useDispatch();

    return(
            <div className="container">
                <img src={`${dishfoto.img}.jpg`} alt="fotos"/>
                <h2>{dishfoto.name}</h2>
                <h6>состав: {dishfoto.compound}</h6>
                <h3>{dishfoto.price} руб.</h3>
                {/*доработать позже*/}
                {/* <button>колличество порций</button>  */}

                <ChangeQuantity quantity={quantity}setQuantity={setQuantity}/>

                <button onClick={()=>{dispatch(addItemToCart({ dishfoto, quantity }))}}> Добавить в корзину </button>
                </div>
                
            
    )
}
export default DishFoto;