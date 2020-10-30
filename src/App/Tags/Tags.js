import React from 'react';
import './Tags.css'

function Tags({tags, setSelectedFilter}){

  const tagsList = tags.map( (item, index) => <li className="tags-item" key={index} onClick={ () => { setSelectedFilter(item) } }>#{item}</li> )

  return (
      <>
      <ul className='tags'>
        {tagsList}
      </ul>
      </>
  );
}

export default Tags;