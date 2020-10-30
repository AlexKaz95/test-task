import React from 'react';
import './Filter.css';
import Tags from '../Tags/Tags';

function Filter({selectedFilter, setSelectedFilter}) {

    const removeTagFromFilter = (item) => {
        setSelectedFilter(state => {
            const indexToRemove = state.indexOf(item);
            return [...state.slice(0, indexToRemove), ...state.slice(indexToRemove + 1)]
        })
    }

    return selectedFilter.length !== 0 && (
        <div className='filter'>
            <span className='text'>Filtered by tags: </span>
             <Tags tags={selectedFilter} setSelectedFilter={removeTagFromFilter}/>
            <span className='clear' onClick={ () => {setSelectedFilter([])} }>(clear)</span>
        </div>
    )
}

export default Filter;