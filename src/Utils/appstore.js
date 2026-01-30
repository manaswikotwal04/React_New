import{configureStore}from"@reduxjs/toolkit";
import cartreducer from"./cartSlice.js";
const appstore=configureStore({
    reducer:{
        cart:cartreducer,
    }
});
export default appstore;