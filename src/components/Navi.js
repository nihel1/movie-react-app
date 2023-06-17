import React, {  useState } from 'react';
import "./Navi.scss";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelect } from '../moduls/selectMovie';

const Navi = () => {
    // manage menu state
    const [isOpen, setOpen] = useState(true);
    const dispatch = useDispatch();
    const onToggle = (id) => dispatch(setSelect(id))
    const toggleMenu = () => {
        setOpen(isOpen => !isOpen);
        console.log(isOpen);
        onToggle(1)
    }
    
    return (
        <nav>
            <button onClick={toggleMenu} className={isOpen ? 'close_btn navBtn' : 'open_btn navBtn'}>
                {isOpen ? <RiMenuUnfoldFill className='navicon'/> : <RiMenuFoldFill className='navicon'/>}
            </button>
            <div className={isOpen ? 'show_menu move' : 'hide_menu move'}>
                <ul className='navmenu'>
                    <li onClick={toggleMenu}><span ><Link to='/'>HOME</Link></span></li>
                    <li>
                        <span><Link to='/latest'>latest movie</Link></span>
                        <div className='innermenu'>
                            <ul>
                                <li onClick={toggleMenu}><Link to='/latest'>currently showing</Link></li>
                                <li onClick={toggleMenu}><Link to='/yet'>upcoming release</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <span><Link to='/recomend'>recommended movies</Link></span>
                        <div className='innermenu'>
                            <ul>
                                <li onClick={toggleMenu}><Link to='/month'>Featured Movies of the Month</Link></li>
                                <li value={1} onClick={toggleMenu}><Link to='/genrepage/sifter'>Recommended Movies by Genre</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li onClick={toggleMenu}>
                        <span><Link to='/test'>movie review</Link></span>
                    </li>
                    <li>
                        <span>community</span>
                        <div className='innermenu'>
                            <ul>
                                <li onClick={toggleMenu}><Link to='/notice'>announcement</Link></li>
                                <li onClick={toggleMenu}><Link to='/free'>Free Board</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navi;