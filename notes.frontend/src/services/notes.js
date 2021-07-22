import { ActionCreators } from "../redux/notesReducer";
import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:44326/notes',
})

//Get all notes
export const GetNotes = async (dispatch) => {
    try{ 
        //api call
        const { data } = await axiosInstance.get();
        dispatch(ActionCreators.setNotes(data));
    }catch{
        console.log("Error getting all notes!")
    }
}

//Delete note by id
export const DeleteNote = async (dispatch, note) => {
    try{ 
        //api call
        await axiosInstance.delete(`/${note.id}`);
        dispatch(ActionCreators.deleteNote(note));
    }catch{
        console.log("Error deleting note!")
    }
}
//Create note
export const CreateNote = async (dispatch, note) => {
    try{ 
        //api call
        const { data } = await axiosInstance.post('', note);
        dispatch(ActionCreators.createNote(data));
    }catch{
        console.log("Error creating note!")
    }
}
//Update note
export const UpdateNote = async (dispatch, note) => {
    try{ 

        //api call
        await axiosInstance.put('', note);
        dispatch(ActionCreators.updateNote(note));
    }catch{
        console.log("Error editing note!")
    }
}