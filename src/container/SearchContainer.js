import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config/apiurl';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getDatas } from '../moduls/moviePost';
import SearchPage from '../pages/SearchPage';
import Loading from '../components/Loading';

const mm = {
    margin: "300px",
    marginLeft: "800px",
    color: "#fff"
}


const SearchContainer = () => {
    const dispatch = useDispatch();
    const {name, value} = useParams();

    const{loading, data, error} = useSelector(state => state.moviePost.moviePosts);

    const searchData = async () => {
        const data = await axios.get(`${API_URL}/search/${name}/${value}`);
        return data;
    }
    
    useEffect(()=>{
        dispatch(getDatas(searchData))
    },[dispatch, name, value])
    console.log(data)
    if(loading) return <Loading/>
    if(error) return <div style={{...mm}}>An error has occurred.</div>
    if(!data) return <div style={{...mm}}>No data.</div>
    return (
        <SearchPage data={data}/>
    );
};

export default SearchContainer;