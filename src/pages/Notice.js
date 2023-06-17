import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { getDatas, getNotices } from '../moduls/moviePost';
import { getCookie } from '../util/cookie';
import './Community.scss';
import Pagination from '../components/Pagination';


const mm = {
  margin: "300px",
  marginLeft: "800px",
  color: "#fff"
}


const Notice = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(5); //number of data rendered per page

   // Calculate the implementation of the list of page numbers
   const indexOfLast = currentPage * postsPerPage    // last number of pages 1 * 10
   const indexOfFirst = indexOfLast - postsPerPage;   // first number of pages 10 - 10 = 0

   const currentPosts = (data) => {
    let currentPosts = data.slice(indexOfFirst, indexOfLast)  //Slice the data from 0 to 10
    return currentPosts;
}

  const isLogin = useSelector(state => state.loginCheck.isLogin);
  const navigate = useNavigate();
  const onClick = () => {
    if(!isLogin) {
      alert('This service requires login.');
      navigate('/login');
    }else {
      navigate('/writenotice');
    }
  }

  const {loading, data, error} = useSelector(state => state.moviePost.noticePosts);
  const dispatch = useDispatch();


  const textData = async () => {
    const data = await axios.get(`${API_URL}/notice`);
    return data
  }

  useEffect(()=>{
    dispatch(getNotices(textData))
  },[dispatch]);


    if(loading) return <div style={{...mm}}>loading..</div>
    if(error) return <div style={{...mm}}>An error has occurred.</div>
    if(!data) return <div style={{...mm}}>No data.</div>
    const postLists = currentPosts(data) //Paging slice after passing the above conditional statement
    return (
        <div className='everyboard inner'>
          <div className='boardbox'>
            <h2>announcement</h2>
            <div className='nav'>
              {getCookie("usernickname") === "admin" ? <div>
                <button onClick={onClick} className='writebtn'>writing</button>
              </div> : null}
            </div>
            <table className='freetable'>
              <thead>
                  <tr className='category'>
                      <th width='45%'>title</th>
                      <th width='25%'>Writer</th>
                      <th width='20%'>registration date</th>
                  </tr>
              </thead>
              <tbody>
                {postLists.map(text=>
                  <tr key={text.not_no}>
                    <td>
                      <Link to={`/noticefree/${text.not_no}`}><span>{text.not_title}</span></Link>
                    </td>
                    <td>{text.not_name}</td>
                    <td>{text.not_date}</td>
                  </tr>
                )}
              </tbody>
            </table>
            <Pagination className="pagination"
              postsPerPage={postsPerPage}
              totalPosts={data.length}
              paginate={setCurrentPage}
              isDone={false}
              currentPage={currentPage}
            />
          </div>
        </div>
      )
};

export default Notice;