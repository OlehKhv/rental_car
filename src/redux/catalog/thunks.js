import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllAdverts } from "../../services/advertApi";

export const fetchAllAdverts = createAsyncThunk(
    "adverts/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            return await getAllAdverts();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
