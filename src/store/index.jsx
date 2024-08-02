import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./slices/NoteSlice";

const myStore = configureStore({
    reducer:{
        notes : notesSlice
    }
});
export default myStore;