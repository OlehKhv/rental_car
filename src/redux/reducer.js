import { combineReducers } from "redux";
import { advertsReducer } from "./catalog/slice";
import { favoritesReducer } from "./favorites/slice";

export const reducer = combineReducers({
    adverts: advertsReducer,
    favorites: favoritesReducer,
});
