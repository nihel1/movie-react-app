import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { getCookie } from '../util/cookie';

const WriteCommend = ({movno,onSign}) => {
    const navigate = useNavigate();
    // textarea character count state management
    const [textCount, setTextCount] = useState(0);
    // one-line state management
    const isLogin = useSelector(state => state.loginCheck.isLogin);
    const [formData, setFormData] = useState({
        c_name: getCookie('usernickname'),
        c_desc: '',
        c_movno: movno,
        c_isDone: "false"
    });

    const onChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setTextCount(e.target.value.length);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(!isLogin) {
            alert('This service requires login.');
            navigate('/login');
        }
        if(isLogin) {
            
            setFormData({
                ...formData,
                c_desc: ''
            })
            setTextCount(0);
            WriteCommend();
        }
    }
    const WriteCommend = () => {
        axios.post(`${API_URL}/commend`, formData)
        .then(res => {
            console.log(res.data);
            ss()
            onSign();
            alert('registered.');
           
        })
        .catch(e => console.log(e))
        
    }
     let count = 0
     const ss = () => {
         count += 1
     }
    return (
        <div className='write'>
             <form onSubmit={onSubmit} >
                <textarea maxLength={50} onChange={onChange}  name="c_desc"
                placeholder='Please feel free to write a review for this movie..' value={formData.c_desc}/>
                <button type='submit' >registration</button>
            </form> 
            <p>
                <nav>
                    <span className='countsp'>{textCount}</span>
                    <span>/</span>
                    <span>50 ruler</span>
                </nav>
            </p>
        </div>
    );
};

export default WriteCommend;