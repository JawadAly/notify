import { createSlice, current } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name : "notes",
    initialState : [],
    reducers : {
        addNote(currentState,action){
            const dateObj = new Date();
            const date = dateObj.toLocaleDateString();
            const time = dateObj.toLocaleTimeString();
            currentState.push({
                ...action.payload,
                // adding note addition date time
                addedAt : date.concat(' ',time),
                //adding notes current condition(pending,completed,default it will be pending)
                noteCondition : 'pending'
            });
            alert('Note added successfully!');
        },
        deleteNote(currentState,action){
            currentState.splice(action.payload,1);
            alert('Note successfully trashed!');
        },
        deleteAllNotes(currentState,action){
            currentState.splice(0,currentState.length);
            alert('All notes successfully trashed!');
        },
        updateNote(currentState,action){
            const index = action.payload;
            const note = currentState[index];
            if(note){
                note.noteCondition = 'completed';
                alert('Note successfully marked as completed!');
            }
        }
    }

});
export default notesSlice.reducer;
export const {addNote,deleteNote,deleteAllNotes,updateNote} = notesSlice.actions;