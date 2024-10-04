import './App.css';
import Cart from './Components/Cart/Cart';
import Dishes from './Components/DishesComponent/Dishes';
import AllCategories from './Components/Filter/AllCategories';



// import image from'./sushi-3.jpg';

function App() {
  return (
    <div >
      <div className='adres'>
        <h3>г.Санкт-Петербург  Невский пр.,10 </h3>
        <h1>SUSHI_MANIYA</h1>
        <h3>тел: +7921-981-67-86</h3>
      </div> 


      <div className='sushi'>
        <div className='paralax'>
          <p>Закажи сейчас и получи скидку 20%</p>
        </div>
      </div>

    <div >
      <AllCategories/>
    </div>

    <div className='cartmenu'>
      <Dishes/>
      <Cart/> 
    </div>  
  </div>
  );
}

export default App;
