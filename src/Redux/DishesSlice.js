import { createSlice } from '@reduxjs/toolkit'

export const DishesSlice = createSlice({

    name:'dishes',
    
    initialState:{
        selectedCategory:'Запеченные роллы'
    },
    reducers:{
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
          },
    }
})


export const { filterCategory } = DishesSlice.actions
export const getSelectedCategory = state =>state.dishes.selectedCategory;
export default DishesSlice.reducer;