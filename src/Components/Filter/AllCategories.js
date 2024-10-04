import Filter from "./Filter";

const AllCategories =()=>{
    return(
        <div className="category">
            {['Запеченные роллы', 'Классические роллы', 'Острые суши', 'Наборы', 'Все блюда'].map (category =><Filter category = {category}/>)}
          
        </div>
    )
}
export default AllCategories;