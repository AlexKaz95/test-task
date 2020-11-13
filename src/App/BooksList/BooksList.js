import React from 'react';
import './BooksList.css';
import Book from '../Book/Book'

function BooksList({currentTabParams, setSelectedFilter, selectedFilter}) {
    
    const [books, setCurrentTabList, setNextTabList, textButton] = currentTabParams;

    let elements = <div className='empty-list'>List is empty</div>;

    if (Object.keys(books).length !== 0){
        elements = [];
        Object.keys(books).map(key => {
            elements.unshift(<Book book={books[key]}
                    setCurrentTabList={setCurrentTabList} 
                    setNextTabList={setNextTabList} 
                    textButton={textButton} 
                    setSelectedFilter={setSelectedFilter} 
                    selectedFilter={selectedFilter}
                    key={books[key].id} />)
        })
    }

    return (
        <div className="books-list">
            {elements}
        </div>
    ); 
}

export default BooksList;