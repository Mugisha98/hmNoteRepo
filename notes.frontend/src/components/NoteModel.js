import { Form, Modal, Button, FormControl, InputGroup } from "react-bootstrap";
import React,{useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { CreateNote, UpdateNote } from "../services/notes";


export const CreateNoteModal = () =>
{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    return <div>
                <Button onClick={handleShow} className='btn btn-success'>Add Note</Button>
                <NoteModal note={null} handleFormSubmit={CreateNote} show={show} handleClose={handleClose}/>
            </div>
}

export const UpdateNoteModal = ({ note }) =>
{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return <div>
                <Button onClick={handleShow} className='btn btn-warning'>Edit</Button>
                <NoteModal note={note} handleFormSubmit={UpdateNote} show={show} handleClose={handleClose}/>
            </div>
}

const NoteModal = ({note, handleFormSubmit, show, handleClose}) =>
{
    const[modalNote, setModalNote] = useState({});
    const dispatch = useDispatch();

    useEffect(()=>{
        setModalNote(note);
    }, [note])

    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Form onSubmit={event =>{ 
              event.preventDefault();
              handleFormSubmit(dispatch, modalNote);}
          }>
          <Modal.Body>
              <InputGroup>
                  <FormControl value={modalNote === null ? '' : modalNote.value}
                   onChange={event => setModalNote({ ...modalNote, value: event.target.value })} />
              </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type='submit' variant="primary" onClick={handleClose}>
              Save 
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
    );
  }

  export default NoteModal; 