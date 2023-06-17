import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config/apiurl';
import { goToHome, setLogin } from '../../moduls/loginCheck';
import { setCookie } from '../../util/cookie';
import './Login.scss';

const LoginPage = () => { 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        userid: "",
        userpassword: "",
    })
    const onChange = (e) => {
        const {name , value} = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(loginData.id === '' || loginData.password === '') {
            alert('Please enter your email and password.')
        } else {
            axios.post(`${API_URL}/login`, loginData)
            .then(result=>{
                console.log(result)
                const {id, nicname} = result.data[0];
                if(result.data === "failure") {
                    alert("Login failed.")
                }
                if(id && nicname) {
                    alert("You are logged in.")
                    let expires = new Date();
                    expires.setMinutes(expires.getMinutes()+60);
                    setCookie('userid', `${id}`, {path: '/', expires});
                    setCookie('usernickname', `${nicname}`, 
                    {path: '/', expires});
                    dispatch(setLogin());
                    dispatch(goToHome(navigate))
                }
            })
            .catch(e=>{
                console.log(e)
            })
        }
    }

    return (
        <div className='inner'>
            <div className='login'>
                <div className='loginbox'>
                    <h2>log in</h2>
                    <form onSubmit={onSubmit}>
                    <table className='login_table'>
                        <tbody>
                            <tr>
                                <td>
                                    <span>id</span>
                                </td>
                                <td>
                                    <input name='userid' type='text' value={loginData.userid} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Password</span>
                                </td>
                                <td>
                                    <input name='userpassword' type='password' value={loginData.userpassword} onChange={onChange}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <ul className='find'>
                        <Link to="/findid"><li>find ID</li></Link>
                        <span>|</span>
                        <Link to="/findpass"><li>find password</li></Link>
                    </ul>
                    <div className='login_btn'>
                        <button type="submit">login</button>
                        <Link to="/join"><button>join the membership
</button></Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;