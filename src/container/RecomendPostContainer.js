import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../config/apiurl";
import { getDatas } from "../moduls/moviePost";
import RecomendPage from "../pages/RecomendPage";
import Loading from "../components/Loading";

const recommendData = async () => {
    const data = await axios.get(`${API_URL}/recomend`);
    return data;
}

const RecomendPostContainer = () => {
    const {loading, data, error} = useSelector(state => state.moviePost.moviePosts);
    const dispatch = useDispatch();
    console.log(data);

    useEffect(() => {
        dispatch(getDatas(recommendData));
    }, [dispatch]);
    if(loading) return <Loading/>
    if(error) return <div>An error has occurred.</div>
    if(!data) return <div>No data.</div>
    return (
        <RecomendPage data={data} />
    );
};

export default RecomendPostContainer;