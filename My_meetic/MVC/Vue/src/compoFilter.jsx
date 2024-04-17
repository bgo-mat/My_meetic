import './mainPage.css';
import MySlider from './compoSlider.jsx';
import MyVilleSelect from './compoSelectVille.jsx';
import MyGenreSelect from './compoSelectGenre.jsx';
import MyHobbiesSelect from './compoSelectHobbies.jsx';
import React, { useState } from "react";


function Filter({ getTab }) {

    const [ageInput, setAgeInput] = useState("");
    const [villeInput, setVilleInput] = useState("");
    const [hobbiesInput, setHobbiesInput] = useState("");
    const [genreInput, setGenreInput] = useState("");

    function getValueVille(input) {
        setVilleInput(input);
    }

    function getValueAge(input) {
        setAgeInput(input);
    }

    function getValueGenre(input) {
        setGenreInput(input);
    }

    function getValueHobbies(input) {
        setHobbiesInput(input);
    }



    const logTab = () => {
        const tab = { "ville": villeInput, "age": ageInput, "genre": genreInput, "hobbies": hobbiesInput };
        getTab(tab);
    }

    return <>

        <div className='selectVille'>
            <MyVilleSelect getValueVille={getValueVille} />
            <MyGenreSelect getValueGenre={getValueGenre} />
        </div>



        <div className='selectVille'>
            <MyHobbiesSelect getValueHobbies={getValueHobbies} />
            <div className='blocSlide'>
                <div className='slide'>
                    Age
                    <MySlider getValueAge={getValueAge} />
                </div>
            </div>
        </div>

        <button className='shadow' onClick={logTab}>Rechercher</button>





    </>

}

export default Filter