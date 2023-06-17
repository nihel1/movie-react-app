import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config/apiurl';
import './Editpass.scss'

const Editpass = () => {
    const navigate = useNavigate();
    const {updateId} = useSelector(state=>state.loginCheck);
    console.log(updateId)
    const [formData, setFormData] = useState({
        password:"",
        passwordch: "",
        email: updateId,
    })
    const onChange = (e)=> {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(formData.password === formData.passwordch) {
            axios.patch(`${API_URL}/editpass`, formData)
            .then(res=>{
                console.log(res)
                if(res.data){
                    alert('Password has been changed');
                    navigate("/login")
                }
            })
            .catch(e=>console.log(e))
        }else {
            alert('Passwords do not match')
        }
    }
    return (
        <div className='inner outline'>
            <div className='editpass'>
                <h2>Change password</h2>
                <form className='enter' onSubmit={onSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>password</td>
                                <td><input name="password" type="password" value={formData.password}
                                onChange={onChange}/></td>
                            </tr>
                            <tr>
                                <td>verify password</td>
                                <td><input name="passwordch" type="password" value={formData.passwordch}
                                onChange={onChange}
                                /></td>
                            </tr>
                            <tr>
                                <td colSpan={2}className='subtn'>
                                    <button type="submit">to change</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};

export default Editpass;