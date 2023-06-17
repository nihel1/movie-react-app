import React from 'react';
import { Link} from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import "./NewMoviePage.scss";

// Create a component that rotates the div map and scatters it
function NewMovieList({list}) {
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
    return (
        <div className="NewMovie">
            <Link to={`/detail/${list.mov_no}`}>
                <div className="NewMovie_img_div">
                    <img src={`${API_URL}/${list.mov_img}`} alt='' className="NewMovie_img"/>
                </div>
                <div className="NewMovie_desc" style={{...ff}}>
                    <h4 className="NewMovie_title" style={{...ww}}>{list.mov_title}</h4>
                    <div style={{...ss}}>
                        <p style={{...jj}}>{list.mov_desc}</p>
                    </div>
                    <div className="NewMovie_score" style={{...ll}}>grade {list.mov_score}</div>
                </div>
            </Link>
        </div>
    );
}

const SearchPage = ({data}) => {
    console.log(data);
    return (
        <div className='inner'>
            <div className="NewMovie_page">
                <h2>search results...({data.length})Gun</h2>
                {data.length > 0 ?  
                    <div className="NewMovie_box">
                        {data.map(da => <NewMovieList key={da.mov_no} list={da}/>)}
                    </div>
                :
                    <div className="NewMovie_box2">
                        <p>No results were found for your search.</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default SearchPage;