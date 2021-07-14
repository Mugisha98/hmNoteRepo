const initialState = {
    notes: [],
}

export const ActionTypes = {
    SET_NOTES: 'SET_NOTES',
    DELETE_NOTE: 'DELETE_NOTE',
    CREATE_NOTE: 'CREATE_NOTE',
    UPDATE_NOTE: 'UPDATE_NOTE',
}

export const ActionCreators = 
{
    setNotes: payload => ({ type: ActionTypes.SET_NOTES, payload }),
    deleteNote: payload => ({ type: ActionTypes.DELETE_NOTE, payload }),
    createNote: payload => ({ type: ActionTypes.CREATE_NOTE, payload }),
    updateNote: payload => ({ type: ActionTypes.UPDATE_NOTE, payload }),
}

export default function NotesReducer(state = initialState, action)
{
    switch(action.type)
    {
        case ActionTypes.SET_NOTES:
            return { ...state, notes: [...action.payload] };

        case ActionTypes.DELETE_NOTE:
            for(let i = 0; i<state.notes.length; i++){
               if(state.notes[i].id === action.payload.id){
                   state.notes.splice(i, 1);
                   break;
               } 
            }
            return { ...state, notes: [...state.notes] }   

        case ActionTypes.CREATE_NOTE:
            return {...state, notes: [...state.notes, action.payload]}  

        case ActionTypes.UPDATE_NOTE:
            for(let i = 0; i < state.notes.length; i++){
                if(state.notes[i].id === action.payload.id){
                    state.notes[i].value = action.payload.value;        
                } 
             }
            return {...state, notes: [...state.notes]} 

        default:
            return state;  
    }
}