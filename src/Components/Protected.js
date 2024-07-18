import React, { useEffect } from "react";
import { Link , NavLink, useNavigate} from 'react-router-dom';


function Protected(props) {

    const {Component} = props;
    const navigate = useNavigate();

    useEffect(()=>{
        let token = localStorage.getItem('login');
        if (!token) {
            navigate('/login');
            return;
    } });

  return (
    <>
   <Component/>
    </>
  )
}

export default Protected;