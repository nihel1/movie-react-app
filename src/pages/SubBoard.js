import React from 'react';
import Subboar_Free from '../container/Subboar_Free';
import Subboar_Notice from '../container/Subboar_Notice';
import Subboar_Review from '../container/Subboar_Review';
import './SubBoard.scss';
  
const SubBoard = () => {
    return (
        <div className='sboard inner'>
            <Subboar_Free/>
            <Subboar_Review/>
            <Subboar_Notice/>
        </div>
    );
};

export default SubBoard;