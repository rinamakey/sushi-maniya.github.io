import { configureStore } from '@reduxjs/toolkit'
import dishes from'./DishesSlice';
import cart from'./CartSlice';



export const store = configureStore({
    reducer: {
      dishes,
      cart
    },
  })
  export default store;