import React, {useState} from 'react';

function FormEdit({setFormEditIsOpen, book, setBook}) {
    return (
        <div className='modal-window'>
                <div className='form-add-book'>
                <div className='close-form' onClick={() => {setFormEditIsOpen(false)}}>×</div>
                    <h2>Новая книга</h2>
                <div className='input-line'>
                    <label htmlFor="author">Автор</label>
                    <input autoComplete="off"  type="text" id='author' onChange={(event) => {setBook(book => {
                        return {
                            ...book,
                            author: event.target.value
                        }
                    })}} value={book.author}/>
                </div>
                <div className='input-line'>
                    <label htmlFor="title">Название</label>
                    <input  autoComplete="off"  type="text" id='title' onChange={(event) => {setBook(book => {
                        return {
                            ...book,
                            title: event.target.value
                        }
                    })}} value={book.title}/>
                </div>
                <div className='input-line'>
                    <label htmlFor="description">Описание</label>
                    <textarea  autoComplete="off"  type="text" id='description' onChange={(event) => {setBook(book => {
                        return {
                            ...book,
                            description: event.target.value
                        }
                    })}}  value={book.description}/>
                </div>
                <div className='input-line'>
                    <label htmlFor="tags">Тэги (через запятую)</label>
                    <input autoComplete="off"  type="text" id='tags' onChange={(event) => {setBook(book => {
                        return {
                            ...book,
                            tags: event.target.value.split(',')
                        }
                    })}}  value={book.tags}/>
                </div>
                </div>
                <div className='add-button' onClick={() => {
                    setBook(state => {
                        return {
                          ...state,
                          [book.id]: book
                        }
                      });
                    setFormEditIsOpen(false);
                }}>Добавить</div>
            </div>
    )
}

export default FormEdit;