import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../features/todoSlice";

export const store = configureStore({
    reducer:{
      todo: counterSlice
    },
})