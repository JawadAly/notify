import { createSlice, current } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name : "notes",
    initialState : [],
    reducers : {
        addNote(currentState,action){
            currentState.push({
                ...action.payload
            });
            alert('Note added successfully!');
        },
        deleteNote(currentState,action){},
        deleteAllNotes(currentState,action){}
    }

});
export default notesSlice.reducer;
export const {addNote} = notesSlice.actions;