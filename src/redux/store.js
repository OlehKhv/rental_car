import { configureStore } from "@reduxjs/toolkit";
// import { filterReducer } from "./filter/slice";
import { advertsReducer } from "./catalog/slice";

export const store = configureStore({
    reducer: {
        adverts: advertsReducer,
        // filter: filterReducer,
    },
});
