import React from 'react';
import './Main.scss';
import Latest from './Latest';
import Recomend from './Recomend';
import NewMovie from './NewMovie';
import SubBoard from './SubBoard';

const Main = () => {
    return (
        <div className='main' >
            <NewMovie/>
            <Latest/>
            <Recomend/>
            <SubBoard/> 
        </div>
    );
};

export default Main;