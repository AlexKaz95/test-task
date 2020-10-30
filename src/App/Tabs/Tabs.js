import React from 'react';
import './Tabs.css'

function Tabs({setCurrentTab, currentTab}) {
    return (
        <ul className='tabs-wrapper'>
            <li className={currentTab==='toRead'?"tab active":'tab'} onClick={()=>{setCurrentTab('toRead')}}>To read</li>
            <li className={currentTab==='inProgress'?"tab active":'tab'} onClick={()=>{setCurrentTab('inProgress')}}>In progress</li>
            <li className={currentTab==='done'?"tab active":'tab'} onClick={()=>{setCurrentTab('done')}}>Done</li>
        </ul>
    );
}

export default Tabs