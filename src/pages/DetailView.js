import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { getData } from '../moduls/moviePost';
import { getCookie } from '../util/cookie';
import './DetailView.scss';

const mm = {
    margin: "300px",
    marginLeft: "800px",
    color: "#fff"
  }

const DetailView = () => {
    const {no} = useParams();
    console.log(no)
    const isLogin = useSelector(state => state.loginCheck.isLogin);
    const navigate = useNavigate();
    const listbt = () => {
        navigate("/free")
    }
    const {loading, data, error} = useSelector(state => state.moviePost.moviePost);
    const dispatch = useDispatch();

    const textData = async () => {
        const data = await axios.get(`${API_URL}/textFree/${no}`);
        return data
    }

    useEffect(() => {
        dispatch(getData(textData))
    }, [dispatch, no])
    console.log(data)
    if(loading) return <div style={{...mm}}>loading..</div>
    if(error) return <div style={{...mm}}>An error has occurred.</div>
    if(!data) return <div style={{...mm}}>No data.</div>
    return (
            <div className="inner detailtext">
                <div className='detailtextbox'>
                    <div className='detailTitle'>
                        <h2>{data.bor_title}</h2>
                        <div>
                            <nav>
                                <span>Writer</span>
                                <span>:</span>
                                <span>{data.bor_name}</span>
                            </nav>
                            <nav>
                                <span>views</span>
                                <span>:</span>
                                <span>5</span>
                            </nav>
                        </div>
                    </div>
                    <div className='textzone'>
                        {data.bor_desc}
                    </div>
                    <div className='btn'>
                        { getCookie("usernickname") === data.bor_name || getCookie("usernickname") === "admin" ?
                           <>
                            <button className='btn1'><Link to={`/editText/${no}/${data.bor_title}/${data.bor_name}/${data.bor_desc}/${data.bor_date}`}>correction</Link></button>
                            <button className='btn2' onClick={ () =>{
                                axios.delete(`${API_URL}/deleteFree/${no}`)
                                .then(res=>{
                                    console.log(res)
                                    if(res){
                                        alert("Deleted")
                                        navigate("/free")
                                    }
                                })
                                .catch(e=>console.log(e))
                            }}>delete</button>
                            <button className='btn2' onClick={listbt}>List</button></> : <button className='btn2' onClick={listbt}>List</button>
                        }
                    </div>    
                </div>
            </div>
    )
}

export default DetailView;