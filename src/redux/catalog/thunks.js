import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    fetchAdverts,
    fetchAdvertsByMakes,
    getAllMakes,
} from "../../services/advertApi";

export const getAllAdverts = createAsyncThunk(
    "adverts/getAllAdverts",
    async (_, { rejectWithValue }) => {
        try {
            return await fetchAdverts();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const getAdverts = createAsyncThunk(
    "adverts/getAdverts",
    async (params, { rejectWithValue }) => {
        try {
            return await fetchAdverts(params);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const getAdvertsByMakes = createAsyncThunk(
    "adverts/getAdvertsByMakes",
    async (params, { rejectWithValue }) => {
        try {
            return await fetchAdvertsByMakes(params);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const getMakesList = createAsyncThunk(
    "adverts/getMakesList",
    async (_, { rejectWithValue }) => {
        try {
            return await getAllMakes();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
