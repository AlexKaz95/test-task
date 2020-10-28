import React, {useState} from 'react';
import './Tags.css'

function Tags({tags}){
const tagsList = tags.map((item, index) => <li className="tags-item" key={index}>#{item}</li>)
    return (
        <>
        <ul className='tags'>
          {tagsList}
        </ul>
        </>
    );
}

export default Tags;