import axios from 'axios';
import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import './WriteText.scss';


const EditNotice = () => {
    const {no, title, name, desc, date} = useParams();
    console.log(no)
    console.log(title)
    console.log(name)
    console.log(desc)
    console.log(date)

    const navigate = useNavigate();

    const listbt = () => {
        navigate("/notice")
    }
    

    const [formData, setFormData] = useState({
        n_title: `${title}`,
        n_nickname: `${name}`,
        n_date: `${date}`,
        n_desc: `${desc}`,
        n_no: `${no}`
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
        if(formData.n_title !=="" && formData.n_desc !== "" ) {
            axios.patch(`${API_URL}/editNotice`, formData)
            .then(res=>{
                console.log(res)
                if(res){
                    alert('Modifications completed');
                    navigate("/notice")
                }
            })
            .catch(e=>console.log(e));
        }else {
            alert("Please enter title and content.");
        }
    }
   
    return (
        <div className="Writing">
            <div className='inner'>
                <h2>edit post</h2>
                <div className='form-wrapper'>
                    <form onSubmit={onSubmit}>
                        <input className="title-input" name="n_title" type='text' placeholder='Please enter a title.'
                        onChange={onChange} value={formData.n_title}/>
                        <textarea className="text-area" name="n_desc" placeholder='Please enter your content.'
                        onChange={onChange} value={formData.n_desc}></textarea>
                        <nav className='form_btn'>
                            <button className="submit_btn" type="submit">correction</button>
                            <button className="submit_btn" type="reset" onClick={listbt}>cancellation</button>
                        </nav>
                    </form>
                </div>  
            </div>
      </div>
    );
};

export default EditNotice;