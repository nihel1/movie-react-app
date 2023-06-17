import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../config/apiurl';


const DetailReview = ({movno}) => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        axios.get(`${API_URL}/detailreview/${movno}`)
        .then(res=>{
            console.log(res.data)
            setReviews(res.data);
        })
        .catch(e=>console.log(e))
    },[])
    if(!reviews) return <div>No data.</div>
    return (
        <>
        {reviews.map(re=>{
            return (
                <div className='reviewlist detail' style={{backgroundColor:"#fff", width:"75%", height:"100%"}}>
        <span className='detailreview title' style={{fontSize:"20px", fontWeight:"bold"}}>best reviews</span>
        <div className='reviewbox detail'>
                <div className='imgbox'>
                    <img src={`${API_URL}/${re.r_img}`} alt=''/>
                </div>
                <div className='reviewtext' style={{width:"85%", marginLeft:"3%"}}>
                    <div className='rev_title'>
                        <nav className='titlesp'>
                            <span>{re.r_title}</span>
                        </nav>
                        <nav className='rev_writen'>
                            <span>best reviews</span>
                            <span>:</span>
                            <span>{re.r_nickname}</span>
                        </nav>
                    </div>
                    <div className='rev_desc'>
                        <p>{re.r_desc}</p>
                    </div>
                </div>
            </div>
        </div>
            )
        })}
        </>
    );
};

export default DetailReview;