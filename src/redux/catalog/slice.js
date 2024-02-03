import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchAllAdverts } from "./thunks";
import { handleFetchAllFulfilled } from "./helpers";

const advertsInitialState = {
    items: [],
};

const advertsSlice = createSlice({
    name: "adverts",

    initialState: advertsInitialState,

    extraReducers: (builder) => {
        builder.addCase(fetchAllAdverts.fulfilled, handleFetchAllFulfilled);
    },
});

export const advertsReducer = advertsSlice.reducer;

