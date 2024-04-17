import './mainPage.css';
import React, { useState } from "react";
import Filter from './compoFilter';
import UserCard from './compoUserCard';

function Search() {

    const [tab, setTab] = useState("");

    function getTab(input) {
        setTab(input);
    }


    return <>
        <div className='blocRecherche'>

            <div className='filtre'>
                <Filter getTab={getTab} />
            </div>

        </div>
        <div className='blocCard'>
            <UserCard tab={tab} />
        </div>




    </>

}

export default Search