import { configureStore } from "@reduxjs/toolkit";
import { allReciters } from "../Slices/recitersSlice";
import { allRecitersMushaf } from "../Slices/recitersmushafSlice";
import { allSurahList } from "../Slices/suwarListSlice";



const store = configureStore({
    reducer: {allReciters, allRecitersMushaf, allSurahList}
})

export default store;