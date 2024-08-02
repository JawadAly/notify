import React, { useState } from 'react';
import MUITextField from './MUITextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addNote } from '../store/slices/NoteSlice';

const NotesTaker = () =>{
    const[noteData ,setNoteData] = useState({
        title: '',
        content:''
    });
    const detectChange = (event) =>{
        let name = event.target.name; 
        let value = event.target.value; 
        setNoteData((prevVal)=>{
            return{
                ...prevVal,
                [name] : value
            };
        });
    }
    // redux toolkit work here
    const dispatch = useDispatch();
    const notesAddition = (payload)  =>{
        // console.log(payload.title);
        // console.log(payload.content);
        dispatch(addNote(payload));
    }
    return(
        <>
            <section className='bannerSection'>
                <div className='container'>
                    <div className='flexer d-flex'>
                        <div className='notesInputArea w-100 p-3'>
                            <h5 className='mb-4'>Note Details</h5>
                            <div className='col-7 mb-3'>
                                <MUITextField label='Note title' name='title' val={noteData.title} onChng={detectChange} isMultiline={false}/>
                            </div>
                            <div className='col-10 mb-3'>
                                <MUITextField label='Note Content' name='content' val={noteData.content} onChng={detectChange} isMultiline={true}/>
                            </div>
                            <Button 
                            variant="contained"
                            color='warning'
                            endIcon={<AddIcon/>}
                            onClick={()=> notesAddition(noteData)}
                            >
                                Add Note
                            </Button>
                        </div>

                        <div className='notesTrackArea w-100 p-3'>
                            <table className="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Title</th>
                                        <th>Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>lora</td>
                                        <td>mora</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default NotesTaker;

{/* <IconButton aria-label="delete" size='large'>
                                    <AddIcon/>
                                </IconButton> */}