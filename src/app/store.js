import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice';
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./service/dummyData";



const store = configureStore({

    reducer:{
        counter: counterReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware)
})

setupListeners(store.dispatch);



export default store;