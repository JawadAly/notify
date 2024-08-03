import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import Tooltip from "@mui/material/Tooltip";

const MUIDeleteBtn = ({delBtn,clickEvent}) => {
  return (
    <>
      <Tooltip title={delBtn ? 'Trash' : 'Mark Completed'}>
        <IconButton 
        onClick={clickEvent}
        >
          {delBtn ? <DeleteIcon color="error" /> : <CheckIcon color="success" />}
        </IconButton>
      </Tooltip>
    </>
  );
};
export default MUIDeleteBtn;
