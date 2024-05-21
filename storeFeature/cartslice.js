import  { createSlice, nanoid } from '@reduxjs/toolkit'




const calculateTotal = (amount, currency="USD") => {

    let num = Intl.NumberFormat('en-US', 
	{ 
	style: 'currency', 
	currency: currency,
	minimumFractionDigits: 2 // Adjust this based on your currency's decimal requirement
	})
	.format(amount); 
    console.log(num)

    return num
}

const initialState = {

//     food : [ 
//         {id : 1, text : "hello"}, 
//         {id : 2, text : "hell"}
// ]
food : [ 
    // {id : 1, data : { title : 'poke', price : 11.99, quantity : 1}}, 
    // {id : 2, data : { title : 'pokeaa', price : 12.99, quantity : 1}}
],
value : '',
total : 0,

}

//let map = new Map()

export const cartSlice = createSlice({

    name : 'food',
    initialState,
    reducers : {
        addFood : (state, action) => {


           const existingFood = state.food.find((item) => action.payload.id === item.data.id)

       

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

          //state.total = state.total + calculateTotal(action.payload.price)
         // debugger
          let result = state.total + action.payload.price
          state.total = Number(result.toFixed(2))

            //state.food.push(food)
        },
        removeFood : (state, action) => {
            // state.food = state.food.filter((item) => {
            //     item.id !== action.payload
            // })
            //debugger
            const index = state.food.findIndex(item => item.data.id === action.payload.id);
      if (index !== -1) {
        if (state.food[index].data.quantity > 1) {
          state.food[index].data.quantity -= 1;
        } else {
            console.log("WAM")
          state.food.splice(index, 1);
        }
      }
     
      let result = state.total - action.payload.price
      state.total = Number(result.toFixed(2))
      //console.log(`After : ${state.total} `)
        }
    }
})

export const {addFood, removeFood} = cartSlice.actions


export default cartSlice.reducer
