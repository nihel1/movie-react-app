import axios from 'axios';
import React, { useState } from 'react';
import { BiLike, BiCommentDetail } from "react-icons/bi";
import {  useSelector } from 'react-redux';
import { API_URL } from '../config/apiurl';
import { getCookie } from '../util/cookie';
import { useNavigate } from 'react-router-dom';

const RecoCount = ({movno, data, reDispatch}) => {
    const isLogin = useSelector(state => state.loginCheck.isLogin);
    const navigate = useNavigate();
    console.log(data);
    const userid = getCookie('userid');
    console.log(userid);
    const [formData, setFormData] = useState({
        reco_count: data.reco_count,
        reco_usreid: userid,
        reco_movno: movno
    })
    const onSubmit = () => {
        if(isLogin === true) {
            axios.post(`${API_URL}/counterUpdate`,formData).then(res=>{
                if(res.data === 'no') {
                    alert('already recommended.');
                    reDispatch();
                }
                if(res.data === 'ok') {
                    alert('recommended.');
                    reDispatch();
                }
                console.log(res);
            }).catch(e=>{
                console.log(e);
            })
        }else {
            alert('This service requires login.');
            navigate('/login');
        }    
    }
    return (
        <div className='titlezone'>
            <h3>movie review <BiCommentDetail className='icon2'/></h3>
            <nav>
                <span className='infosp'>( Click the icon to recommend this movie )</span>
                <BiLike className='icon' onClick={onSubmit}/> : <span>{formData.reco_count}</span>
            </nav>
        </div>
    );
};

export default RecoCount;