import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config/apiurl';
import { getCommends, getDatas } from '../moduls/moviePost';
import { useDispatch ,useSelector } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import './Community.scss';
import Pagination from '../components/Pagination';


const mm = {
  margin: "300px",
  marginLeft: "800px",
  color: "#fff"
}

const Community = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(5); //한페이지당 렌더링 되는 데이터 수

  const isLogin = useSelector(state => state.loginCheck.isLogin);
  const navigate = useNavigate();
  const onClick = () => {
    if(!isLogin) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    }else {
      navigate('/write');
    }
  }
  
  //console.log(data)
   // Calculate the implementation of the list of page numbers
   const indexOfLast = currentPage * postsPerPage  // last number of pages 1 * 10
   const indexOfFirst = indexOfLast - postsPerPage;   // first number of pages 10 - 10 = 0


  const {loading, data, error} = useSelector(state => state.moviePost.commends);
  const dispatch = useDispatch();

  const textData = async () => {
    const data = await axios.get(`${API_URL}/textFree`);
    return data
  }

  const currentPosts = (data) => {
      let currentPosts = data.slice(indexOfFirst, indexOfLast) //Slice the data from 0 to 10
      return currentPosts;
  }

  useEffect(() => {
    dispatch(getCommends(textData))
  }, [dispatch])
  
  if(loading) return <div style={{...mm}}>loading..</div>
  if(error) return <div style={{...mm}}>An error has occurred.</div>
  if(!data) return <div style={{...mm}}>No data.</div>
  const postLists = currentPosts(data) //Paging slice after passing the above conditional statement
  return (
    <div className='everyboard inner'>
      <div className='boardbox'>
        <h2>Free Board</h2>
        <div className='nav'>
            <div>
              <button onClick={onClick} className='writebtn'>writing</button>
            </div>
        </div>
          <table className='freetable'>
            <thead>
                <tr className='category'>
                    <th width='50%'>title</th>
                    <th width='25%'>Writer</th>
                    <th width='25%'>registration date</th>
                </tr>
            </thead>
            <tbody>
              {postLists.map(text=>
              <tr key={text.bor_no}>
                <td>
                  <Link to={`/detailfree/${text.bor_no}`}><span>{text.bor_title}</span></Link>
                </td>
                <td>{text.bor_name}</td>
                <td>{text.bor_date}</td>
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
}

export default Community;