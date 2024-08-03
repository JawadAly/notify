import React, { useState,useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MUISelectBox = ({currentState,currentStateModifier}) => {
    const[selectOption,setSelectOptions] = useState('');

    const performNotesFilteration = () =>{
        currentStateModifier(()=>{
            if(selectOption === 0){
                return currentState;   
            }
            else if(selectOption === 1){
                return currentState.filter((value)=>{
                    return value.noteCondition === 'pending';
                });
            }
            else{
                return currentState.filter((value)=>{
                    return value.noteCondition === 'completed';
                });
            }
            
        });
    }
        
    useEffect(()=>{
        performNotesFilteration();
    },[selectOption]);
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Filter</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          label="Age"
          value={selectOption} 
          onChange={(event)=>{
            setSelectOptions(event.target.value);
            //performing change in notes state by incomingHandler
            // performNotesFilteration(); 
          }}
        >
          <MenuItem value={0}>Default</MenuItem>
          <MenuItem value={1}>Pending</MenuItem>
          <MenuItem value={2}>Completed</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
export default MUISelectBox;
