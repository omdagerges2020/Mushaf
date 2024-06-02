import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Data
const data = {
    recitersMushaf: null,
    moshafs: [],
    loadingReciterMushaf: true,
}


// Get Reciters Mushaf Function
export const getRecitersMushaf = createAsyncThunk("getreciters", async(id, thunkApi)=>{
    const rejectWithValue = thunkApi;
    try {
        const data = await axios ({
            method: "get",
            url: `https://www.mp3quran.net/api/v3/reciters?language=ar&reciter=${id}`
        })
        // console.log(data.data);
        return data.data;
    } catch(er){
        return rejectWithValue(er)
    }
})


// Create Slice
const allRecitersMushafSlice = createSlice({
    name: "reciters",
    initialState: data,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getRecitersMushaf.pending, (state, action)=>{
            state.loadingReciterMushaf = true;
        })
        builder.addCase(getRecitersMushaf.fulfilled, (state, action)=>{
            state.loadingReciterMushaf = false;
            // recieters mushaf names
            state.recitersMushaf = action.payload;  //object
            state.moshafs = action.payload.reciters[0].moshaf;
            // console.log(action.payload);
            // console.log(action.payload.reciters[0]);
        })
        builder.addCase(getRecitersMushaf.rejected, (state, action)=>{
            state.loadingReciterMushaf = false;
            // state.errorReciters = action.payload;
        })
    }
})

export const  allRecitersMushaf = allRecitersMushafSlice.reducer;
