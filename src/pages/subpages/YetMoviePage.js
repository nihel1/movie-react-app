import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config/apiurl';
import "../NewMoviePage.scss";

function YetMovieList({list}) {
    const ss = {
        overflow: "hidden",
        height: "100px"
    }
    const jj ={
        lineHeight: "20px"
    }
    const ll = {
        marginTop: "20px"
    }
    const ff = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    }
    const ww ={
        height: "50px"
    }
    return(
    <div className="NewMovie">
        <Link to={`/detail/${list.mov_no}`}>
        <div className="NewMovie_img_div">
            <img src={`${API_URL}/${list.mov_img}`} alt='' className="NewMovie_img"/>
        </div>
        <div className="NewMovie_desc" style={{...ff}}>
            <h4 className="NewMovie_title" style={{...ww}}>{list.mov_title}</h4>
            <div style={{...ss}}>
                <p style={{...jj}} className="NewMovie_subdesc">{list.mov_desc}</p>    
            </div>
            <div style={{...ll}} className="NewMovie_score">{list.mov_score}</div>
        </div>
        </Link>
    </div>
);
}
const YetMoviePage = ({data}) => {
    return (
        <div className='inner'>
            <div className="NewMovie_page">
                <h2>Latest Movies - Coming Soon</h2>
                <div className="NewMovie_box">
                    {data.map(d => <YetMovieList key={d.mov_no} list={d}/>)}
                </div>
            </div>
        </div>
    );
};

export default YetMoviePage;