import React, {useState} from 'react';
import './Filter.css';
import Tags from '../Tags/Tags';

function Filter() {
    return (
        <div className='filter'>
            <span className='text'>Filtered by tags: </span>
             <Tags tags={['fsdfs', 'fsdfs']}/>
            <span className='clear'>(clear)</span>
        </div>
    );
}

export default Filter;