import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { DeleteNote, GetNotes } from "../services/notes";
import { Button } from 'react-bootstrap';
import { UpdateNoteModal } from './NoteModel';


export const NotesTable = () => {  
    const notes = useSelector(state => state.notesReducer.notes);
    const dispatch = useDispatch();

    useEffect(() => {  
        GetNotes(dispatch);
    }, []); 
    return <table className = 'table table-dark'>
        <thead>
            <tr>
                <td style={{textAlign:'left', fontWeight:'bold'}}>Note</td>
                <td style={{textAlign:'left', fontWeight:'bold'}}>Id</td>
            </tr>
        </thead>
        <tbody>        
            {
                notes.map(n =>
                    <tr>
                        <td style={{textAlign:'left'}}>{n.value}</td>
                        <td style={{textAlign:'left'}}>{n.id}</td>
                        <td>
                            <Button className='btn btn-danger' onClick={() => DeleteNote(dispatch,n)}>Delete</Button>  
                        </td>
                        <td>
                            <UpdateNoteModal  note ={n}/>
                        </td>
                    </tr>
                )
            }
        </tbody>
    </table>
}
