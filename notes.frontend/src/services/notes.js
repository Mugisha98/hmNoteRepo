import { ActionCreators } from "../redux/notesReducer";


export const GetNotes = async (dispatch) => {
    try{ 
        //api call
        const response = [
            {value: 'Study for exam in 3 weeks', id: 1},
            {value: 'At tthis rate I will be a master in no time', id: 2},
            {value: 'Build more full-stack applications', id: 3},
            {value: 'I love writing notes', id: 4},
        ];

        dispatch(ActionCreators.setNotes(response));
    }catch{
        console.log("Error!")
    }
}


export const DeleteNote = async (dispatch, note) => {
    try{ 
        //api call
        

        dispatch(ActionCreators.deleteNote(note));
    }catch{
        console.log("Error!")
    }
}

export const CreateNote = async (dispatch, note) => {
    try{ 
        //api call
        
        const response = {value: note, id: 1};
            
        dispatch(ActionCreators.createNote(response));
    }catch{
        console.log("Error!")
    }
}
export const UpdateNote = async (dispatch, note) => {
    try{ 
        //api call
        
        //const response = {value: 'Study for exam in 3 weeks', id: 1};
        const response = {value: note, id: 1};
        dispatch(ActionCreators.updateNote(response));
    }catch{
        console.log("Error!")
    }
}