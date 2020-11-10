import './App.css';
import React, {useState, useEffect} from 'react';
import BooksList from './BooksList/BooksList';
import Tabs from './Tabs/Tabs';
import Filter from './Filter/Filter';
import AddBook from './features/AddBook/script';

function getSearchString(tags, tab) {

  const url = new URLSearchParams();
  url.set('tab', tab);
  if (tags.length > 0) {
      url.set('tags', tags.join(','));
  }
  return '?' + url.toString();
}

function App(props) {
  const {data} = props;

  const urlLocation = new URLSearchParams(window.location.search);

  const books = data.items.reduce((accumulator, current) => {
    accumulator[current.id] = current;
    return accumulator;
  }, {});

  const [currentTab, setCurrentTab] = useState(urlLocation.get('tab') || 'toRead');
  const [selectedFilter, setSelectedFilter] = useState(urlLocation.get('tags')?.split(',') || []);

  const [toRead, setToRead] = useState(JSON.parse(localStorage.getItem('toRead')) || books);
  const [inProgress, setInProgress] = useState(JSON.parse(localStorage.getItem('inProgress')) || {});
  const [done, setDone] = useState(JSON.parse(localStorage.getItem('done')) || {});

  const currentTabParams = {
    'toRead':  [toRead, setToRead, setInProgress, <span>Start reading &#x2192;</span>],
    'inProgress':  [inProgress, setInProgress, setDone, <span>Finish reading &#x2192;</span>],
    'done':  [done, setDone, setToRead, <span>Return to read &#8617;</span>]
  }

  useEffect( () => localStorage.setItem('toRead', JSON.stringify(toRead)), [toRead]);
  useEffect( () => localStorage.setItem('inProgress', JSON.stringify(inProgress)), [inProgress]);
  useEffect( () => localStorage.setItem('done', JSON.stringify(done)), [done]);
  useEffect( () => { 
    const url = getSearchString(selectedFilter, currentTab);
    const state = {selectedFilter, currentTab};
    (window.history.state === null
    || window.history.state.currentTab !== currentTab
    || window.history.state.selectedFilter.length !== selectedFilter.length)
    && window.history.pushState(state, '', url);
  }, [currentTab, selectedFilter]);
  useEffect( () => { 
    const handler = (event) => {
      setCurrentTab(window.history.state.currentTab);
      setSelectedFilter(window.history.state.selectedFilter);
    };
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, [] );

  return (
    <>
    <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab}/>
    <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
    <AddBook currentTabParams={currentTabParams[currentTab]}/>
    <BooksList currentTabParams={currentTabParams[currentTab]} setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter}/>
    </>
  )
}

export default App;
