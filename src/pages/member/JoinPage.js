import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { API_URL } from '../../config/apiurl';
import { goToHome } from '../../moduls/loginCheck';
import './Join.scss';

// select/option style
const Select = styled.select`
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url('/images/select_arrow.png') calc(100% - 1px) center no-repeat;
    background-size: 20px;
    padding: 4px 30px 4px 10px;
    border-radius: 4px;
    outline: 0 none;
    transition: 0.2s;
`;
const Option = styled.option`
    background: #eee;
    color: #082032;
    padding: 3px 0;
`;



const JoinPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: "",
        username:"",
        nicname: "",
        password: "",
        passwordch: "",
        year: "",
        month: "",
        day: "",
        email1: "",
        email2: "google.com",
        gender: ""
    })
    // initial value
    const [id, setId] = useState("")
    const [username, setUsername] = useState("")
    const [nicname, setNicname] = useState("")
    const [password, setPassword] = useState("")
    const [passwordch, setPasswordch] = useState("")
    const [year, setYear] = useState("")
    const [day, setDay] = useState("")
    const [email1, setEmail1] = useState("")

    //error message
    const [idMessage, setIdMessage] = useState("")
    const [nameMessage, setNameMessage] = useState("")
    const [nicnameMessage, setNicnameMessage] = useState("")
    const [passwordMessage, setPasswordMessage] = useState("")
    const [passwordchMessage, setPasswordchMessage] = useState("")
    const [yearMessage, setYearMessage] = useState("")
    const [dayMessage, setDayMessage] = useState("")
    const [email1Message, setEmail1Message] = useState("")

    //validation check
    const [ isid, setisId] = useState("")
    const [isusername, setisUsername] = useState("")
    const [isnicname, setisNicname] = useState("")
    const [ispassword, setisPassword] = useState("")
    const [ispasswordch, setisPasswordch] = useState("")
    const [isyear, setisYear] = useState("")
    const [isday, setisDay] = useState("")
    const [isemail1, setisEmail1] = useState("")

    // check for duplicates
    const [ischeck, setCheck] = useState({
        checkId: 0,
        checkNic: 0
    })
    


//username
const onChangeName = (e) => {
    const currentName = e.target.value
    setUsername(currentName)
    setFormData({
        ...formData,
        username:currentName
    })
    const nameInput = /^[a-zA-Z-H]{3,10}$/

    if(!nameInput.test(currentName)) {
        setNameMessage("Please enter a valid name")
        setisUsername(false)
    }else {
        setNameMessage("thank you")
        setisUsername(true)
    }
}
//user id
const onChangeid = (e) => {
    const currentId = e.target.value
    setId(currentId)
    setFormData({
        ...formData,
        id:currentId
    })
    const idInput = /^[a-zA-Z0-9]{4,12}$/

    if(!idInput.test(currentId)) {
        setIdMessage("4-12Please enter only uppercase and lowercase letters or numbers between!")
        setisId(false)
    }else {
        setIdMessage("Please double check.")
        setisId(true)
    }
}
//user password
const onChangePass = (e) => {
    const currentPass = e.target.value
    setPassword(currentPass)
    setFormData({
        ...formData,
        password:currentPass
    })
    const passInput = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/

    if(!passInput.test(currentPass)) {
        setPasswordMessage("Please enter at least 8 digits in a combination of numbers + English letters + special characters!")
        setisPassword(false)
    }else {
        setPasswordMessage("this password is available.")
        setisPassword(true)
    }
}
//Check user password
const onChangePassch = (e) => {
    const currentPassch = e.target.value
    setPasswordch(currentPassch)
    setFormData({
        ...formData,
        passwordch:currentPassch
    })
    if(currentPassch !== formData.password) {
        setPasswordchMessage("Passwords do not match")
        console.log(formData.password)
        setisPasswordch(false)
    }else {
        setPasswordchMessage("password matches.")
        setisPasswordch(true)
    }
}

//username
const onChangenic = (e) => {
    const currentnic = e.target.value
    setNicname(currentnic)
    setFormData({
        ...formData,
        nicname:currentnic
    })
    const nicnaInput = /^[a-zA-Z-Hit 0-9]{2,10}$/

    if(!nicnaInput.test(currentnic)) {
        setNicnameMessage("Please enter your nickname between 2 and 10 characters.")
        setisNicname(false)
    }else {
        setNicnameMessage("please double check")
        setisNicname(true)
    }
}
//email
const onChangeEma = (e) => {
    const currentEma = e.target.value
    setEmail1(currentEma)
    setFormData({
        ...formData,
        email1:currentEma
    })
    const emailInput = /^[a-zA-Z0-9]{2,30}$/

    if(!emailInput.test(currentEma)) {
        setEmail1Message("Please enter your email id")
        setisEmail1(false)
    }else {
        setEmail1Message("")
        setisEmail1(true)
    }
}
//Email Address
const onChangeEma2 = (e) => {
    const currentEma2 = e.target.value
    setFormData({
        ...formData,
        email2:currentEma2
    })
}

//year
const onChangeYear = (e) => {
    const currentYear = e.target.value
    setYear(currentYear)
    setFormData({
        ...formData,
        year:currentYear
    })
    const yearInput = /^[0-9]{3,4}$/

    if(!yearInput.test(currentYear)) {
        setYearMessage("Please enter the year")
        setisYear(false)
    }else {
        setYearMessage("")
        setisYear(true)
    }
}
//birth month
const onChangeMonth = (e) => {
    const currentMonth = e.target.value
    setFormData({
        ...formData,
        month:currentMonth
    })
}

//birthday
const onChangeDay = (e) => {
    const currentDay = e.target.value
    setDay(currentDay)
    setFormData({
        ...formData,
        day:currentDay
    })
    const dayInput = /^[0-9]{1,2}$/

    if(!dayInput.test(currentDay)) {
        setDayMessage("Please enter a date")
        setisDay(false)
    }else {
        setDayMessage("")
        setisDay(true)
    }
}

//gender
const onChangeGen = (e) => {
    const currentGen = e.target.value
    setFormData({
        ...formData,
        gender:currentGen
    })
}



//Confirm ID duplication
const idCheck = ()=>{
    console.log("Start ID duplicate check")
    if(isid) {
        axios.post(`${API_URL}/idch`, {id:id})
        .then(res=>{
            console.log(res.data.id)
            if(res.data.id === id) {
                setIdMessage("Duplicate ID. Please enter another ID")
            } else{
                setIdMessage("Username is available")
                setCheck({
                    ...ischeck,
                    checkId:1,
                })
            }
        })
        .catch(e=>console.log(e))
    }else{
        alert("Please enter your ID")
    }
}

// Check for duplicate nicknames
const nicCheck = ()=>{
    console.log("Start nickname duplicate check")
    console.log(nicname)
    if(isnicname) {
        axios.post(`${API_URL}/nicname`, {nicname:nicname})
        .then(res=>{
            console.log(res.data.nicname)
            if(res.data.nicname === nicname) {
                setNicnameMessage("Duplicate nickname. Please enter another nickname")
            } else{
                setNicnameMessage("Available nickname")
                setCheck({
                    ...ischeck,
                    checkNic:1,
                })
            }
        })
        .catch(e=>console.log(e))
    }else{
        alert("Please enter your nickname")
    }
}

//form submit event
const onSubmit = (e) => {
        e.preventDefault();
        // Check if input is complete
        if(ischeck.checkId === 0 && ischeck.checkNic === 0){
              alert("Please click Check for duplicate ID and nickname")
        }else if(formData.id !== "" && formData.username !== "" && formData.nicname !== "" && formData.password !== "" 
        && formData.year !== "" && formData.month !== "" && formData.day !== "" 
        && formData.email1 !== "" && formData.email2 !== "" && formData.gender !== "" ){
            addMenger()
        }
    }
    const addMenger = () => {
        console.log("call")
        axios.post(`${API_URL}/join`, formData)
        .then(res=>{
            console.log("Finished appointment")
            alert('Registration is successful.')
            setCheck({
                ...ischeck,
                checkId:0,
                checkNic:0
            })
            navigate('/login')
        })
        .catch(e=>{
            console.log('An error has occurred')
            console.log(e)
        })
    }
    const home = () => {
        dispatch(goToHome(navigate))
    }
    return (
        <div className='inner'>
            <div id='join'>
                <div className='joinbox'>
                    <h2>join the membership</h2>
                    <form onSubmit={onSubmit}>
                    <table className='member_table'>
                        <tbody>
                            <tr>
                                <td><span>이름</span></td>
                                <td>
                                    <input name='username' type='text' value={username} onChange={onChangeName}/>
                                    <span>{nameMessage}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><span>id</span></td>
                                <td>
                                    <input name='id' type='text' value={id} onChange={onChangeid}/>
                                    <button className='id_btn' type='button' onClick={idCheck}>double check</button>
                                    <span>{idMessage}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><span>password</span></td>
                                <td>
                                    <input name='password' type='password' value={password} onChange={onChangePass}/>
                                    <span>{passwordMessage}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><span>verify password</span></td>
                                <td>
                                    <input name='passwordch' type='password' value={passwordch} onChange={onChangePassch}/>
                                    <span>{passwordchMessage}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><span>nickname</span></td>
                                <td>
                                    <input name='nicname' type='text' value={nicname} onChange={onChangenic}/>
                                    <button className='id_btn' type='button' onClick={nicCheck}>double check</button>
                                    <span>{nicnameMessage}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><span>email</span></td>
                                <td>
                                    <input name='email1' type='text' value={email1} onChange={onChangeEma}/>
                                    <Select name="email2" value={formData.email2} onChange={onChangeEma2}>
                                        <Option value="google.com" >@ google.com</Option>
                                        <Option value="naver.com">@ naver.com</Option>
                                        <Option value="daum.net">@ daum.net</Option>
                                        <Option value="nate.com">@ nate.com</Option>
                                        <Option value="hanmail.com">@ hanmail.com</Option>
                                    </Select>
                                    <span>{email1Message}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><span>birth date</span></td>
                                <td>
                                    <input name='year' type='text' value={year} onChange={onChangeYear}/>
                                    
                                    <span className='sp'>year</span>
                                    <Select name="month" value={formData.month} onChange={onChangeMonth}>
                                        <Option>please select</Option> 
                                        <Option value="01" >01</Option>                                        
                                        <Option value="02" >02</Option>
                                        <Option value="03" >03</Option>
                                        <Option value="04" >04</Option>
                                        <Option value="05" >05</Option>
                                        <Option value="06" >06</Option>
                                        <Option value="07" >07</Option>
                                        <Option value="08" >08</Option>
                                        <Option value="09" >09</Option>
                                        <Option value="10" >10</Option>
                                        <Option value="11" >11</Option>
                                        <Option value="12" >12</Option>
                                    </Select>
                                    <span className='sp'>month</span>
                                    <input name='day' type='text'  className='dayinput' value={day} onChange={onChangeDay}/>
                                    <span className='sp'>Day</span>
                                    <span>{yearMessage}</span>
                                    <span>{dayMessage}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><span>gender</span></td>
                                <td>
                                    <span className='sp2'>other</span> 
                                    <input name='gender' type='radio' value="other" onChange={onChangeGen}/>
                                    <span className='sp2'>female</span>
                                    <input name='gender' type='radio' value="female" onChange={onChangeGen}/>
                                </td>   
                            </tr>
                        </tbody>
                    </table>
                    <div className='join_btn'>
                        <button type="submit">sign up</button>
                        <button type='button' onClick={home}>cancellation</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinPage;