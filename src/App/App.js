import './App.css';
import React, {useState, useEffect} from 'react';
import BooksList from './BooksList/BooksList';
import Tabs from './Tabs/Tabs';
import Filter from './Filter/Filter';

function App({data}) {
  const books = data.items;
  
  const [currentTab, setCurrentTab] = useState('toRead');
  const [toRead, setToRead] = useState(books);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  const getBookList = (currentTab) => {
    switch (currentTab){
      case 'toRead': return toRead;
      case 'inProgress': return inProgress;
      case 'done': return done;
      default: return toRead;
    }
  } 

  return (
    <>
    <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab}/>
    {/* <Filter/> */}
    <BooksList books={getBookList(currentTab)}/>
    </>
  )
}

export default App;
