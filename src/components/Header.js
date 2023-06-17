import React, { useEffect, useState } from 'react';
import Navi from './Navi';
import './Header.scss';
import { CgSearch } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie, removeCookie } from '../util/cookie';
import { setLogin, setLogout } from '../moduls/loginCheck';

const selectStyle = {
    border: 0,
    backgroundColor: "#334756",
    color: "#fff",
    outline: 0,
    fontSize: "14px",
    fontFamily: "'GoyangIlsan', sans-serif",
    width: "70px"
}

const Header = () => {
    const isLogin = useSelector(state=>state.loginCheck.isLogin);
    const username = getCookie('usernickname');
    const dispatch = useDispatch();
    const logoutClick = () =>{
        removeCookie('usernickname');
        removeCookie('userid');
        dispatch(setLogout())
        alert("logout")
    }
    useEffect(()=>{
        if(username) {
            dispatch(setLogin())
        }
    })
    const [isSearch, setSearch] = useState({
        colume: "mov_title",
        search: ""
    })

    const onChange = (e) => {
       const {name, value} = e.target
       setSearch({
        ...isSearch,
        [name]: value
       })
    }
    
    
    const addSearch = () => {
        if(isSearch !== "" && isSearch !== undefined) {
            setSearch({
                ...isSearch,
                colume: "mov_title",
                search: ""
            })
        }else {
            alert("Please enter a search term")
        }
    }

    return (
        <header>
            <Navi/>
            <h1>
                <Link to='/'><img src='/images/mainlogo.png' alt=''/></Link>
            </h1>
            <div id='search'>
                <div className='searchbox'>
                    <select name="colume" style={{...selectStyle}} value={isSearch.colume} onChange={onChange}>
                        <option value="mov_title">movie name</option>
                        <option value="mov_genre">genre</option>
                    </select>
                    <input name='search' value={isSearch.search} placeholder='Search...' onChange={onChange}/>
                    <button onClick={addSearch}>
                        <Link to={`/searchpage/${isSearch.colume}/${isSearch.search}`}>
                            <CgSearch className='searchicon'/>
                        </Link>
                    </button>
                </div>
            </div>
            <div id='headermenu'>
                <ul className='membermenu'>
                    <li><Link to='/'>HOME</Link></li>
                    <span>|</span>
                    {isLogin ? <><li onClick={logoutClick}>log out</li>
                    {username === 'admin' ? 
                    <><span>|</span>
                    <li><Link to='/movieupdate'>film registration</Link></li></> : null}</> :
                    <><li><Link to='/login'>log in</Link></li>
                    <span>|</span>
                    <li><Link to='/join'>join the membership</Link></li></>}
                </ul>
            </div>
        </header>
    );
};

export default Header;