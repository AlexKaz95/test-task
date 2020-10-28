import React, {useState} from 'react';
import Tags from '../Tags/Tags';
import './Book.css';

function Book({book}) {
    return (
        <div className="book-item">
        <div className="top">
          <div className="header">
            <div className="author">{book.author}</div>
            <div className="title">{book.title}</div>
          </div>
          <div className="rebase">start reading</div>
        </div>
        <div className="description">{book.description}</div>
        <Tags tags={book.tags}/>
      </div> 
    );
}

export default Book;