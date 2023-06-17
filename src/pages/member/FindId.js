import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config/apiurl';
import "./FindId.scss"


const FindId = () => {
    const navigate = useNavigate()
    const [idInfo, setidInfo] = useState("")
    const [formData, setFormData] = useState({
        username:"",
        useremail:"",
    })
    const onChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        axios.post(`${API_URL}/findid`, formData)
        .then(res=>{
            setidInfo(res.data)
        })
        .catch(e=>console.log(e))
    }
    const home = ()=>{
        navigate("/login")
    }

    
    return (
        <div className='inner outline'>
            <div className='findid'>
                <h2>find ID</h2>
                {idInfo ? <div>your id is {idInfo}no see<Link to="/login"><button className='logch'>log in</button></Link></div>:
                <form className='enter' onSubmit={onSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>name</td>
                                <td><input name="username" type="text" value={formData.username}
                                onChange={onChange}/></td>
                            </tr>
                            <tr>
                                <td>email</td>
                                <td><input name="useremail" type="text" value={formData.useremail}
                                onChange={onChange}/></td>
                            </tr>
                            <tr>
                                <td colSpan={2}className='subtn'>
                                    <button type="submit">check</button>
                                    <button onClick={home}>cancellation</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>} 
            </div>
        </div>
    );
};

export default FindId;