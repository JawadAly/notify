import React, { useEffect, useState } from "react";
import MUISelectBox from "./MUISelectBox";
import { useDispatch, useSelector } from "react-redux";
import MUIDeleteBtn from "./MUIDeleteBtn";
import Button from "@mui/material/Button";
import { deleteNote,deleteAllNotes,updateNote } from "../store/slices/NoteSlice";

const DetailedNotes = () => {
    const[myNotes,setMyNotes] = useState([]);
  const incomingNotes = useSelector((globalState) => {
    return globalState.notes;
  });
  useEffect(()=>{
    setMyNotes(incomingNotes);
  },[incomingNotes]);
  
  const dispatch = useDispatch();
  const deleteThisNote = (payload) => {
    dispatch(deleteNote(payload));
  };
  const trashAllNotes = () =>{
    dispatch(deleteAllNotes());
  }
  const updateNoteCondition = (payload) =>{
    dispatch(updateNote(payload));
  }
  return (
    <>
      <section className="bannerSection">
        <div className="container p-3">
          <div className="d-flex justify-content-end mb-3">
            <div className="col-2">
                {/* <button className="btn btn-warning" 
                onClick={()=>{
                    setMyNotes((prevVals)=>{
                        return prevVals.filter((value)=>{
                            return value.noteCondition === 'pending';
                        });
                    });
                 }}
                >
                    Testing
                </button> */}
              <MUISelectBox currentState={myNotes} currentStateModifier={setMyNotes}  />
            </div>
          </div>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>Content</th>
                <th>Added At</th>
                <th>Current State</th>
                <th colSpan="2" className="text-center bg-secondary">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {
                myNotes.map((value, index) => {
                return (
                  <tr key={index} id={index}>
                    <td>{index + 1}</td>
                    <td>{value.title}</td>
                    <td>{value.content}</td>
                    <td>{value.addedAt}</td>
                    <td>{value.noteCondition}</td>
                    <td>
                      <MUIDeleteBtn
                        delBtn={true}
                        clickEvent={() => deleteThisNote(index)}
                      />
                    </td>
                    <td>
                      <MUIDeleteBtn 
                      delBtn={false} 
                      clickEvent={()=> updateNoteCondition(index)}
                      />
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td colSpan="2" >
                  <Button 
                  variant="contained" 
                  color="error"
                  onClick={()=>trashAllNotes()}
                  >
                    Trash All Notes
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default DetailedNotes;

