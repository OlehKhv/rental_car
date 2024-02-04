import { createSlice } from "@reduxjs/toolkit";
import {
    getAdverts,
    getAdvertsByMakes,
    getAllAdverts,
    getMakesList,
} from "./thunks";
import {
    handleGetAdvertsByMakesFulfilled,
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
            .addCase(getMakesList.fulfilled, handleGetMakesFulfilled)
            .addCase(
                getAdvertsByMakes.fulfilled,
                handleGetAdvertsByMakesFulfilled
            );
    },
    reducers: {
        setPage(state, { payload }) {
            state.page = payload;
        },
    },
});

export const advertsReducer = advertsSlice.reducer;
export const { setPage } = advertsSlice.actions;
