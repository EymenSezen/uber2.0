import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice"

export const store=configureStore({ 
    reducer:{
        nav:navReducer,
    },
})


/////redux çalışma mantığı
///provider store reducer  provider sarar store reduceri içerir reducer state ve actionlarla hareket eder
///dispatch ve selectorle pull push işlemleri özetle bu şekilde