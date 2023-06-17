import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { getCookie } from '../util/cookie';
import './WriteMovie.scss';

const WriteMovie = () => {
    const navigate = useNavigate();
    const isLogin = useSelector(state => state.loginCheck.isLogin);
    const username = getCookie('usernickname');
    const [formData, setFormData] = useState({
        mov_title: '',
        mov_genre: '',
        mov_limit: '',
        mov_date: '',
        mov_runnigtime: '',
        mov_actor: '',
        mov_director: '',
        mov_country: '',
        mov_score: '',
        mov_desc: '',
        mov_img: '',
        mov_movelink: '',
        mov_reco: null,
    });
    const onChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    // When input whose type is file is onChanged
    // Upload and transmit the changed file to the server
    const onChangeImg = (e) => {
        const {name} = e.target;
        // create form tag
        const imgFormData = new FormData();
        // add form tag data
        imgFormData.append('file', e.target.files[0]);
        // send
        axios.post(`${API_URL}/upload`, imgFormData, {
            headers: {'Content-Type' : 'multipart/formdata'}
        })
        .then(res => {
            setFormData({
                ...formData,
                [name]: res.data.imgUrl
            });
        })
        .catch(e => {
            console.log(e);
        })
    }
    // form submission
    const onSubmit = (e) => {
        e.preventDefault();
        addMovie();
    }
    const addMovie = () => {
        axios.post(`${API_URL}/recomend`, formData)
        .then(res => {
            alert('Finished appointment');
            navigate('/recomend');
        })
        .catch(e => console.log(e))
    }
    useEffect(() => {
        if(!isLogin || username !== 'admin') {
            alert('Only administrators can access.');
            navigate('/');
        }
    }, [isLogin, username, navigate])
    return (
        <div className='inner2 writemovie'>
            <h2>film registration</h2>
            <div className='writemoviebox'>
                <form onSubmit={onSubmit}>
                    <table className='writemovietable'>
                        <tbody>
                            <tr>
                                <th width="10%">title</th>
                                <td>
                                    <input type='text' name='mov_title'
                                    value={formData.mov_title} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>genre</th>
                                <td>
                                    <input type='text' name='mov_genre'
                                    value={formData.mov_genre} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>age limit</th>
                                <td>
                                    <input type='text' name='mov_limit'
                                    value={formData.mov_limit} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>opening date</th>
                                <td>
                                    <input type='text' name='mov_date'
                                    value={formData.mov_date} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>Running time</th>
                                <td>
                                    <input type='text' name='mov_runnigtime'
                                    value={formData.mov_runnigtime} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>actor</th>
                                <td>
                                    <input type='text' name='mov_actor'
                                    value={formData.mov_actor} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>Director</th>
                                <td>
                                    <input type='text' name='mov_director'
                                    value={formData.mov_director} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>open country</th>
                                <td>
                                    <input type='text' name='mov_country'
                                    value={formData.mov_country} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>grade</th>
                                <td>
                                    <input type='text' name='mov_score'
                                    value={formData.mov_score} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>summary</th>
                                <td>
                                    <textarea type='text' name='mov_desc'
                                    value={formData.mov_desc} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>poster</th>
                                <td>
                                    <input className='poster' type='file' name='mov_img'
                                    onChange={onChangeImg}/>
                                    {formData.mov_img && <div>
                                        <img src={`${API_URL}/upload/poster/${formData.mov_img}`}
                                        width='100px' alt=''/>    
                                    </div>}
                                </td>
                            </tr>
                            <tr>
                                <th>trailer link</th>
                                <td>
                                    <input type='text' name='mov_movelink'
                                    value={formData.mov_movelink} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>recommended</th>
                                <td>
                                <select name='mov_reco' value={formData.mov_reco} onChange={onChange}>
                                    <option></option>
                                    <option value='suggestion'>suggestion</option>
                                </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <nav className='movie_submit'>
                        <button>registration</button>
                        <button>cancellation</button>
                    </nav>
                </form>
            </div>
        </div>
    );
};

export default WriteMovie;