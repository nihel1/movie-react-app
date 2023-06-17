import React, { useState } from 'react';
import "./Pagination.scss"




const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
  console.log(currentPage)
  const pageNumbers = []  //set the page number array
  for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
    pageNumbers.push({id: i, isDone: false})
  }
  const [togState, setToState] = useState({
    togList: pageNumbers
  })
  console.log(togState)
  
  const onToggle = (id) => {
    const newTog = togState.togList.map(tog=> tog.id === id ? {
      ...tog,
      isDone: !tog.isDone
    }: tog.id !== id && tog.isDone === true ? {
      ...tog,
      isDone: !tog.isDone
    }: tog)
    
    setToState({
      ...togState,
      togList: newTog
    })
    
  }
  return (
    <div className='pages'>
      <div className='page '>
        <ul className='numberLists'>
          {togState.togList.map((number) =>
          <li key={number.id} className="numberList" 
          style={{color: number.isDone ? "#FF4C29" : "#082032" , 
          borderColor: number.isDone ? "#FF4C29" : "#082032"}} onClick={()=>{
            paginate(number.id)
            console.log(number.isDone)
            console.log(number.id)
            }}>
            <span className='number' onClick={()=>{onToggle(number.id)}}>{number.id}</span>
          </li> )}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;