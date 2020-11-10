import React, { useState } from 'react';
import './style.css'

function AddBook({currentTabParams}) {
    const [bookList, addBook, ...omit] = currentTabParams;
    const [formIsOpen, setFormIsOpen] = useState(false);
    return (
        <>
            <div className='add-new-book' onClick={() => {setFormIsOpen(true)}}><span>+</span></div>
            <div className='modal-window'>
                <div className='close-form'></div>
                <div className='form-add-book'>
                    <h2>Новая книга</h2>
                <div className='input-line'>
                    <label htmlFor="author">Автор</label>
                    <input autocomplete="off"  type="text" id='author' />
                </div>
                <div className='input-line'>
                    <label htmlFor="title">Название</label>
                    <input  autocomplete="off"  type="text" id='title'/>
                </div>
                <div className='input-line'>
                    <label htmlFor="description">Описание</label>
                    <textarea  autocomplete="off"  type="text" id='description' />
                </div>
                <div className='input-line'>
                    <label htmlFor="tags">Тэги</label>
                    <input autocomplete="off"  type="text" id='tags'/>
                </div>
                </div>
                <div className='add-button'>Добавить</div>
            </div>
        </>
    )
}

export default AddBook;