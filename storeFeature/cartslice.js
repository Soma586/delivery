import  { createSlice, nanoid } from '@reduxjs/toolkit'


const initialState = {

//     food : [ 
//         {id : 1, text : "hello"}, 
//         {id : 2, text : "hell"}
// ]
food : [ 
    {id : 1, data : { title : 'poke', price : '11', quantity : 1}}, 
    {id : 2, data : { title : 'pokeaa', price : '11', quantity : 1}}
]
}

//let map = new Map()

export const cartSlice = createSlice({

    name : 'food',
    initialState,
    reducers : {
        addFood : (state, action) => {


           const existingFood = state.food.find((item) => action.payload.title === item.data.title)



           if (existingFood) {
            // If the food item already exists, increase its quantity
            existingFood.data.quantity += 1;
          } else {
            // Otherwise, add a new item to the cart
            state.food.push({
              id: nanoid(),
              data: { ...action.payload, quantity: 1 }
            });
          }



            //state.food.push(food)
        },
        removeFood : (state, action) => {
            // state.food = state.food.filter((item) => {
            //     item.id !== action.payload
            // })
            const index = state.food.findIndex(item => item.data.title === action.payload.title);
      if (index !== -1) {
        if (state.food[index].data.quantity > 1) {
          state.food[index].data.quantity -= 1;
        } else {
          state.food.splice(index, 1);
        }
      }
        }
    }
})

export const {addFood, removeFood} = cartSlice.actions


export default cartSlice.reducer
