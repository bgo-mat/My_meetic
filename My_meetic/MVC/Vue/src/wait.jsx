import './login.css';
import React from "react";
import NavBarre from './componentNav.jsx';
import NavBarreHaut from './compNavHAut.jsx';


function Wait() {

    return <>
        <NavBarreHaut />
        <div className='blocPage'>
            <NavBarre />
            <h1 className='devEncours'>En cours de dévellopement</h1>
        </div>

    </>

}

export default Wait