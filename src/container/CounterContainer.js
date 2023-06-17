import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../config/apiurl';
import { getCount } from '../moduls/recoCount';
import RecoCount from '../pages/RecoCount';

const CounterContainer = ({movno}) => {
    const { loading, data, error} = useSelector(state => state.recoCount);
    const dispatch = useDispatch();
    const countData = async () => {
        const data = await axios.get(`${API_URL}/recocount/${movno}`);
        return data;
    }
    const reDispatch = () =>{
        dispatch(getCount(countData));
    }
    useEffect(() => {
        dispatch(getCount(countData));
    },[dispatch, movno]);
    if(loading) return <div>Loading...</div>
    if(!data) return <div>No data.</div>
    if(error) return <div>An error has occurred.</div>
    return (
        <RecoCount movno={movno} data={data} reDispatch={reDispatch}/>
    );
};

export default CounterContainer;