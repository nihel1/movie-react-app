import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../config/apiurl';
import { getDatas } from '../moduls/moviePost';
import NewMoviePage from '../pages/NewMoviePage';
import Loading from '../components/Loading';

const moviePostData = async () => {
    const data = await axios.get(`${API_URL}/latest`);
    return data;
}

const MoviePostContainer = () => {
    const {loading, data, error} = useSelector(state => state.moviePost.moviePosts);
    const dispatch = useDispatch();
    console.log(data);

    useEffect(() => {
        dispatch(getDatas(moviePostData));
    }, [dispatch]);
    if(loading) return <Loading/>
    if(error) return <div>An error has occurred.</div>
    if(!data) return <div>No data.</div>
    return (
            <NewMoviePage data={data}/>
    );
};

export default MoviePostContainer;