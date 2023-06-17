import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { API_URL } from '../../config/apiurl';
import './MovieDetail.scss';
import { FiFileText, FiYoutube } from "react-icons/fi";
import DetailCommend from '../../container/DetailCommend';
import DetailReview from './DetailReview';

const MovieDetail = ({data}) => {
    
    return (
        <div className='moviedetail inner'>
            <div className='detailbox'>
                <div className='top_zone'>
                    <div className='left'>
                        <div className='title'>
                            <h3>{data.mov_title}</h3>  
                        </div>
                        <div className='movieinfo'>
                            <div className='tablebox'>
                                <table className='infotable'>
                                    <tbody>
                                        <tr>
                                            <td width='38%'>
                                                <strong>genre</strong>
                                                <span>: {data.mov_genre}</span>
                                            </td>
                                            <td width='15%'>
                                                <strong>country</strong>
                                                <span>: {data.mov_country}</span>
                                            </td>
                                            <td width='20%'>
                                                <strong>Running time</strong>
                                                <span>: {data.mov_runnigtime}</span>
                                            </td>
                                            <td>
                                                <strong>opening date</strong>
                                                <span>: {data.mov_date}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>director</strong>
                                                <span>: {data.mov_director}</span>
                                            </td>
                                            <td colSpan={3}>
                                                <strong>actor</strong>
                                                <span>: {data.mov_actor}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>viewing age</strong>
                                                <span>: {data.mov_limit}</span>
                                            </td>
                                            <td colSpan={3}>
                                                <strong>grade</strong>
                                                <span>: {data.mov_score}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <img src={`${API_URL}/${data.mov_img}`} alt=''/>
                    </div>
                </div>
                <div className='moviedesc'>
                        <p className='desctitle'>
                            <strong>
                            movie plot
                                <FiFileText className='icon'/>
                            </strong>
                        </p>
                        <p className='desc'>{data.mov_desc}</p>
                </div>
                <div className='bottom_zone'>
                    <p>
                        <strong>
                        movie main trailer
                            <FiYoutube className='icon'/>
                        </strong>
                    </p>
                    <div className='movie_trailer'>
                        <ReactPlayer className="youtube"
                            url={`${data.mov_movelink}`}
                            width="640px"
                            heigh="auto"
                            muted={true}
                            playing={true}
                            loop={true}
                            controls={true}/>
                    </div>
                </div>
            </div>
            <DetailReview movno={data.mov_no}/>
            <DetailCommend movno={data.mov_no}/>
        </div>
    );
};

export default MovieDetail;