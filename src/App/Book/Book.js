import React from 'react';
import Tags from '../Tags/Tags';
import './Book.css';

function Book({book, setCurrentTabList, setNextTabList, textButton, setSelectedFilter, selectedFilter}) {

  const changeBookStatus = () => {
    setCurrentTabList(state => {
      const {[book.id]: omit, ...newState} = state;
      return newState;
    });
    setNextTabList(state => {
      return {
        ...state,
        [book.id]: book
      }
    });
  }

  const setTagInFilter = (item) => {
    setSelectedFilter(state => {
      if(state.includes(item)) {
        return state
      } else {
        return [...state, item]
      }
    })
  }

  const filterBook = () => {
    let itContinue = true;
    selectedFilter.forEach(tag => {
      if (!book.tags.includes(tag)) {
        itContinue = false;
      }
    });
    return itContinue;
  }

  const removeBook = () => {
    setCurrentTabList(state => {
      const {[book.id]: del, ...other} = state;
      console.log(state, other)
      return {
        ...other
      }
    })
  }


  return filterBook() && (
        <div className="book-item">
        <div className="top">
          <div className="header">
            <div className="author">{book.author}</div>
            <div className="title">{book.title}</div>
          </div>
          <div>
            <p className='buttons-wrapper'>
              <span className='remove-book' onClick={removeBook}>delete</span>
              <span className='remove-book'>edit</span>
            </p>
            <div className="rebase" onClick={changeBookStatus}>{textButton}</div>
          </div>
        </div>
        <div className="description">{book.description}</div>
        <Tags tags={book.tags} setSelectedFilter={setTagInFilter}/>
      </div> 
    )
}

export default Book;