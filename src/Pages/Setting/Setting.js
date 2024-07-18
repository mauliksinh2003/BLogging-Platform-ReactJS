import React from 'react';
import './Setting.css';
import { Link } from 'react-router-dom'

function Setting({data}) {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                {/* <input
                    id="photo"
                    type="file"
                    onChange={onPhotoChange}
                /> */}
                {data.photo && (
                    <img
                        src={data.photo}
                        alt="User Photo"
                        style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                )}
                <p>
                    Hey There !
                    I am student of Computer science. And i am intrested to learn Full stack Dev.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        {JSON.stringify(data.name)}
                        <Link className="link" to="/posts?cat=Life">
                        </Link>
                    </li>


                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Tech">
                            {JSON.stringify(data.email)}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Setting;
