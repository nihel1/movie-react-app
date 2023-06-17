import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { getCookie } from '../util/cookie';
import './WriteText.scss';

const WriteNotice = () => {
    let time = new Date()
    let year = time.getFullYear();
    let month = time.getMonth() +1;
    let date = time.getDate();
    let day = time.getDay();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();


    const navigate = useNavigate()
    const [isText, setText] = useState({
        n_title:"",
        n_desc: "",
        n_nickname: getCookie("usernickname"),
        n_date: `${year}-${month}-${date}`
    })
    const onChange = (e) => {
        const {name, value} = e.target;
        setText({
            ...isText,
            [name] : value
        })
        
    }

    const listbt = () => {
        navigate("/notice")
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(isText.n_title !=="" && isText.n_desc !== "" ){
            WriteText();
        }
    }
    const WriteText = () => {
        console.log("call")
        axios.post(`${API_URL}/notices`, isText)
        .then(res=> {
            console.log(res.data)
            alert('Registered.');
            navigate(`/notice`)
            
        })
        .catch(e=>{
            console.log(e); 
        })
    }

    return (
        <div className="Writing">
            <div className='inner'>
                <h2>write a post</h2>
                <div className='form-wrapper'>
                    <form onSubmit={onSubmit}>
                        <input className="title-input" name="t_title" type='text' placeholder='Please enter a title.'
                        onChange={onChange} value={isText.n_title}/>
                        <textarea className="text-area" name="t_desc" placeholder='Please enter your content.'
                        onChange={onChange} value={isText.n_desc}></textarea>
                        <nav className='form_btn'>
                            <button className="submit_btn" type="submit">registration</button>
                            <button className="submit_btn" type="reset" onClick={listbt}>cancellation</button>
                        </nav>
                    </form>
                </div>  
            </div>
      </div>
    )
    }

export default WriteNotice;