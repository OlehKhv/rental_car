import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAdverts, getAllAdverts, getMakesList } from "./thunks";
import {
    handleGetAdvertsFulfilled,
    handleGetAllAdvertsFulfilled,
    handleGetMakesFulfilled,
} from "./helpers";

const advertsInitialState = {
    page: 1,
    limit: 12,
    totalPages: null,
    adverts: [],
    makes: [],
};

const advertsSlice = createSlice({
    name: "adverts",

    initialState: advertsInitialState,

    extraReducers: (builder) => {
        builder
            .addCase(getAllAdverts.fulfilled, handleGetAllAdvertsFulfilled)
            .addCase(getAdverts.fulfilled, handleGetAdvertsFulfilled)
            .addCase(getMakesList.fulfilled, handleGetMakesFulfilled);
    },
    reducers: {
        setPage(state, { payload }) {
            state.page = payload;
        },
    },
});

export const advertsReducer = advertsSlice.reducer;
export const { setPage } = advertsSlice.actions;
