import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import './ReviewList.scss';

const ReviewList = ({list}) => {
    const {r_img} = list
     let ss = r_img.split("")
     let post = ss.slice(14,28).join("")
    const nav = useNavigate();
    return (
        <div className='reviewlist' onClick={()=>{
            axios.get(`${API_URL}/reviewdetail/${post}`)
            .then(res=>{
                console.log(res.data[0].mov_no) 
                nav(`/detail/${res.data[0].mov_no}`)
            })
            .catch(e=>console.log(e))
        }}>
                <div className='reviewbox'>
                    <div className='imgbox'>
                        <img src={`${API_URL}/${list.r_img}`} alt=''/>
                    </div>
                    <div className='reviewtext'>
                        <div className='rev_title'>
                            <nav className='titlesp'>
                                <span>{list.r_title}</span>
                            </nav>
                            <nav className='rev_writen'>
                                <span>Writer</span>
                                <span>:</span>
                                <span>{list.r_nickname}</span>
                            </nav>
                        </div>
                        <div className='rev_desc'>
                            <p>{list.r_desc}</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ReviewList;