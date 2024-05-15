import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../storeFeature/cartslice';




export const store  = configureStore({
    reducer : cartReducer
})