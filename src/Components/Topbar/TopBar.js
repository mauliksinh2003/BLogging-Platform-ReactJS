import React from 'react'
import './TopBar.css';
import { NavLink, Link , useNavigate} from 'react-router-dom';

function TopBar() {

    const navigate = useNavigate();

    function moveToSetting() {
        navigate('/Changeprofile');
    }

    return (
        <div className='top'>
            <div className='topLeft'>
                <h3>Blogging platform</h3>
            </div>

            <div className='topCenter'>
                <ul className='topList'>
                    <li className="topListItem">
                    <Link className="link" to="/">
                            HOME
                    </Link>
                    </li>

                    <li className='topListItem'> <Link className="link" to="/about">
                        ABOUT
                    </Link></li>
                    <li className='topListItem'> <Link className="link" to="/addpost">
                        ADD
                    </Link></li>
                    <li className='topListItem'>
                    <Link className="link" to="/login">
                            LOGIN
                    </Link></li>
                </ul>
            </div>

            <div className='topRight'>
                <img
                    className="topImg"
                    src="WhatsApp Image 2022-12-21 at 00.36.18.jpg"
                    alt=""
                    onClick={moveToSetting}
                ></img>
                <i className='topIcon fa fa-search'></i>
            </div>

        </div>

    )
}

export default TopBar;
