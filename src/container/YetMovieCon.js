import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../config/apiurl';
import { getDatas } from '../moduls/moviePost';
import YetMoviePage from '../pages/subpages/YetMoviePage';
import Loading from '../components/Loading';

const YetMovieCon = () => {
    const {loading, data, error} = useSelector(state => state.moviePost.moviePosts);
    const getYetData = async () => {
        const data = await axios.get(`${API_URL}/yetpos`);
        return data;
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDatas(getYetData))
    },[dispatch]);
    if(loading) return <Loading/>
    if(error) return<div>v</div>
    if(!data) return<div>No data.</div>

    return (
        <div>
            <YetMoviePage data={data}/>
        </div>
    );
};

export default YetMovieCon;