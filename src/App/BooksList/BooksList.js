import React, {useState} from 'react';
import './BooksList.css';
import Book from '../Book/Book'

function BooksList({books}) {
    let elements = <p className='empty-list'>List is empty</p>;
    if (books.length !== 0){
        elements = books.map(item => {
            return <Book book={item} key={item.id}/>
        })
    }
    return (
        <div className="books-list">
            {elements}
        </div>
    ); 
}

export default BooksList;