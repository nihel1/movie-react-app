import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../config/apiurl';
import { getDatas } from '../moduls/moviePost';
import MonthRecoPage from '../pages/subpages/MonthRecoPage';
import Loading from '../components/Loading';

const MonthRecoContainer = () => {
    const {loading, data, error} = useSelector(state => state.moviePost.moviePosts);
    const getMonthData = async () => {
        const data = await axios.get(`${API_URL}/monthreco`);
        return data;
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDatas(getMonthData));
    }, [dispatch]);
    if(loading) return <Loading/>
    if(!data) return <div>No data.</div>
    if(error) return <div>An error has occurred.</div>
    return (
        <MonthRecoPage data={data}/>
    );
};

export default MonthRecoContainer;