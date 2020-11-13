import React, { useState } from 'react';
import './addBook.css';
import Form from './Form';

function AddBook({currentTabParams, lastId, setLastId}) {
    const [bookList, addBook, ...omit] = currentTabParams;
    const [formIsOpen, setFormIsOpen] = useState(false);
    let form = null;
    if (formIsOpen){
        form = <Form setFormIsOpen={setFormIsOpen} lastId={lastId} addBook={addBook} setLastId={setLastId}/>
    }
    return (
        <>
            <div className='add-new-book' onClick={() => {setFormIsOpen(true)}}><span>+</span></div>
            {form}
        </>
    )
}

export default AddBook;