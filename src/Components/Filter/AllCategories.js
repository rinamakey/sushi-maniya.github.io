import Filter from "./Filter";

const AllCategories =()=>{

    

    return(
        <div  className="category">

            {['Запеченные роллы', 'Классические роллы', 'Острые суши', 'Наборы', 'Все блюда']
            .map ((category,item)=><Filter key={item} category = {category}/>)}
          
        </div>
    )
}
export default AllCategories;