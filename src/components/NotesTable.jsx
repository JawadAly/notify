import React from "react";
import { useSelector } from "react-redux";

const NotesTable = () => {
    let incomingNotes = useSelector((globalState)=> {return globalState.notes});
    // console.log(incomingNotes);
  return (
    <>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
            {
                incomingNotes.map((value,index)=>{
                    return(
                        <tr key={index}> 
                            <td>{index+1}</td>
                            <td>{value.title}</td>
                            <td>{value.content}</td>
                        </tr>
                    );
                })
            }
        </tbody>
      </table>
    </>
  );
};
export default NotesTable;
