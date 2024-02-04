import { createSlice } from "@reduxjs/toolkit";

const favoritesInitialState = {
    favorites: [],
};

const favoritesSlice = createSlice({
    name: "favorites",

    initialState: favoritesInitialState,

    reducers: {
        addToFavorites(state, { payload }) {
            state.favorites.push(payload);
        },
        removeFromFavorites(state, { payload }) {
            const index = state.favorites.findIndex(
                (element) => element.id === payload
            );
            state.favorites.splice(index, 1);
        },
    },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
