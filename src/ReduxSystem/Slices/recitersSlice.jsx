import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

// Data of recitersSlice
const data = {
    reciters: [],
    editLetters: [],
    letters: ["ا", "ب", "ت", "ج", "ح", "خ", "د", "ر", "ز", "س", "ش", "ص", "ط", "ع", "ف", "ل", "م", "ن", "ه", "و", "ي"],
    loadingReciters: true,
    errorReciters: null,
}

// Get AllReciters Function
export const getReciters = createAsyncThunk("getreciters", async(id, thunkApi)=>{
    const rejectWithValue = thunkApi;
    try {
        const data = await axios ({
            method: "get",
            url: "https://www.mp3quran.net/api/v3/reciters?language=ar"
        })
        // console.log(data.data);
        return data.data;
    } catch(er){
        return rejectWithValue(er)
    }
})



// Create Slice
const allRecitersSlice = createSlice({
    name: "reciters",
    initialState: data,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getReciters.pending, (state, action)=>{
            state.loadingReciters = true;
        })
        builder.addCase(getReciters.fulfilled, (state, action)=>{
            state.loadingReciters = false;
            // recieters
            state.reciters = action.payload.reciters;
            state.editLetters = action.payload?.reciters?.filter((rec)=>{
                if(rec.letter === "إ"){
                    rec.letter = "ا"
                    return rec;
                }
                if(rec.letter === "أ"){
                    rec.letter = "ا"
                    return rec;
                }
                 return action.payload.reciters;
            })
           
        })
        builder.addCase(getReciters.rejected, (state, action)=>{
            state.loadingReciters = false;
            // state.errorReciters = action.payload;
        })
    }
})

export const allReciters = allRecitersSlice.reducer;