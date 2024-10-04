
import dataDishes from "../../data/dataDishes";
import DishFoto from "./DishFoto";
import { getSelectedCategory } from "../../Redux/DishesSlice";
import { useSelector } from "react-redux";

const Dishes =()=> {

    const selectedCategory = useSelector(getSelectedCategory)

    return(
        <div>

{dataDishes
    .filter(dish => {
        if(selectedCategory === "Все блюда") return true;

    return selectedCategory === dish.category
})
        .map(dishfoto => <DishFoto dishfoto={dishfoto}/>)
}
        </div>
    )
}
export default Dishes;