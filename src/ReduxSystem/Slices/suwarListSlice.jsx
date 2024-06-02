import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sewarList = {
    allSewar: [],
    loadingSewar: true,
    errorSewar: null,
}

// Geting data function
export const getAllSewar = createAsyncThunk("getsewar", async (id, thunkApi)=>{
    const rejectWithValue = thunkApi;

    try {
        const data = await axios ({
            method: "get",
            url: "https://mp3quran.net/api/v3/suwar?language=ar"
        })
        // console.log(data.data.suwar);
        return data.data;
    } catch(er){
        return rejectWithValue(er)
    }
})

// Create Slice
const suwarListSlice = createSlice({
    name: "reciters",
    initialState: sewarList,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getAllSewar.pending, (state, action)=>{
            state.loadingSewar = true;
        })
        builder.addCase(getAllSewar.fulfilled, (state, action)=>{
            state.loadingSewar = false;
            // allsewar
            state.allSewar = action.payload.suwar;
        })
        builder.addCase(getAllSewar.rejected, (state, action)=>{
            state.loadingSewar = false;
            // state.errorReciters = action.payload;
        })
    }
})

export const allSurahList = suwarListSlice.reducer;



