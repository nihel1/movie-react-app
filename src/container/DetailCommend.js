import React, { useEffect, useState } from 'react';
import './DetailCommend.scss';
import { BiCommentEdit, BiPencil, BiTrash } from "react-icons/bi";
import WriteCommend from '../pages/WriteCommend';
import { useDispatch, useSelector } from 'react-redux';
import { getCommends } from '../moduls/moviePost';
import axios from 'axios';
import { API_URL } from '../config/apiurl';
import { getCookie } from '../util/cookie';
import CounterContainer from './CounterContainer';
import { useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';

const DetailCommend = ({movno}) => {
    const [isEdit, setEdit] = useState({
        isDone: false,
        isId: "",
        isDesc: "",
        isNo: 0
    })
    const navigate = useNavigate()
    const isLogin = useSelector(state => state.loginCheck.isLogin);
    const onSign = () => {
        dispatch(getCommends(commendData));
    }
    const {loading, data, error} = useSelector(state => state.moviePost.commends);
    const dispatch = useDispatch();


    const commendData = async () => {
        const data = await axios.get(`${API_URL}/detailcommend/${movno}`);
        return data;
    }
    console.log(data)

    const reDispatch = () => {
        dispatch(getCommends(commendData))
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(5); //number of data rendered per page

     // Calculate the implementation of the list of page numbers
   const indexOfLast = currentPage * postsPerPage    // last number of pages 1 * 10
   const indexOfFirst = indexOfLast - postsPerPage;   // 페이지 첫번째 수10 - 10 = 0

   const currentPosts = (data) => {
    let currentPosts = data.slice(indexOfFirst, indexOfLast)  //Slice the data from 0 to 10
    return currentPosts;
    }

    
    
    //console.log(data);
    const onDeleteRec = (id) => {
        console.log(`delete${id}`)
        axios.delete(`${API_URL}/deleteCommend/${id}`)
        .then(res=>{
            console.log(res)
            if(res){
                alert("Deleted")
                dispatch(getCommends(commendData))
                navigate(`/detail/${movno}`)
            }
        })
        .catch(e=>console.log(e))
    }
    const [imagineData , setImagineData] = useState({
        newData: [{
            c_no:"",
            c_name:"",
            c_desc: "",
            c_movno: "",
            c_isDone: ""
        }]
    })

    const onChange = (e) =>{
        const {name, value} = e.target;
        setEdit({
            ...isEdit,
            isDesc: value
        })
        
    }
    const onToggleRec = (id) => {
        console.log(`correction${id}`)
        axios.get(`${API_URL}/getEditCommend/${id}`)
        .then(res=>{
            console.log(res)
            if(res){
                console.log(res.data[0])
                setEdit({
                    ...isEdit,
                    isNo : res.data[0].c_no,
                    isDone: true,
                    isId: res.data[0].c_name,
                    isDesc: res.data[0].c_desc
                })
            }
        })
        .catch(e=>console.log(e))        
    }
    // When the edit button is clicked, the edit is complete
    const onEdit = () => {
        axios.patch(`${API_URL}/setEdit`, isEdit)
        .then(res=>{
            console.log(res)
            if(res){
                console.log(res)
                setEdit({
                    ...isEdit,
                    isDone: false
                })
                reDispatch()
            }
        })
        .catch(e=>console.log(e))     
    }

    const onCancel = () => {
        setEdit({
            ...isEdit,
            isDone: false
        })
    }

    console.log(imagineData)
    

    useEffect(() => {
        dispatch(getCommends(commendData));
    }, [dispatch,movno])
    
    if(loading) return <div>Loading...</div>
    if(!data) return <div>No data.</div>
    if(error) return <div>An error has occurred.</div>
    const postLists = currentPosts(data) //Paging slice after passing the above conditional statement
    // Manage comment edit status
    // const [formData, setFormData] = useState({
    //     c_no: '',
    //     c_name: '',
    //     c_desc: '',
    // });
    return (
        <div className='commendbox'>
            {/* counter */}
            <CounterContainer movno={movno}/>
            <div className='commendzone'>
                <table className='commendtable'>
                    <thead>
                        <tr>
                            <th width='20%'>Writer</th>
                            <th width='80%'>one line comment</th>
                            <td colSpan={2}></td>
                        </tr>
                    </thead>
                    <tbody>
                        { isEdit.isDone ? <tr>
                            <td>{isEdit.isId}</td>
                            <td><input name='isDesc' type='text' value={isEdit.isDesc} onChange={onChange}/></td>
                            <td colSpan={2} className='icontd icbtn'>
                                <button onClick={onEdit}>correction</button>
                                <button onClick={onCancel}>cancellation</button>
                            </td>
                        </tr>: postLists.length > 0  ?  postLists.map(da => <tr key={da.c_no}>
                                <td>{da.c_name}</td>
                                <td>{da.c_desc}</td>
                                {(getCookie("usernickname") === `${da.c_name}` && isLogin) ? 
                                <td colSpan={2} className='icontd'>
                                    <BiPencil className='re deicon' onClick={()=>{onToggleRec(da.c_no)}}/>
                                    <BiTrash className='del deicon' onClick={()=>{onDeleteRec(da.c_no)}}/>
                                </td>
                                : <></>
                                }
                            </tr>)
                            : <tr style={{height: '200px'}}>
                                <td colSpan={2}>There is no single comment written..</td>
                            </tr>}
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
            <div className='writezone'>
                <h3>write a comment <BiCommentEdit className='icon2'/></h3>
                <div className='writebox'>
                    {/* textareacomponent in place! */}
                    <WriteCommend movno={movno} onSign={onSign}/>
                </div>
            </div>
        </div>
    );
};

export default DetailCommend;