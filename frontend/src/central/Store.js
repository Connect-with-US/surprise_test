import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../central/reducer/index"

const store=configureStore({
    reducer:rootReducer,
})

export default store;