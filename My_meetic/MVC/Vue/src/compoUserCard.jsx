import './card.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import img from './assets/iconUser.jpg';

function UserCard({ tab }) {
    const [nom, setName] = useState("");
    const [prenom, setPrenom] = useState("");
    const [age, setAge] = useState("");
    const [ville, setVille] = useState("");
    const [i, setI] = useState(0);
    const [animationClass, setAnimationClass] = useState("");
    const navigate = useNavigate();


    async function fetchData() {
        let url = `http://localhost:8000/Controller/`;

        if (tab.length === 0) {
            url += `controllerAll.php`;
        } else {
            let age1 = tab.age === "" ? 18 : tab.age[0];
            let age2 = tab.age === "" ? 80 : tab.age[1];
            url += `controllerCard.php?ville=${tab.ville}&genre=${tab.genre}&hobbies=${tab.hobbies}&age1=${age1}&age2=${age2}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        if (data.val.length === 0) {
            document.getElementsByClassName("blocUser")[0].style = "display:none";
            document.getElementsByClassName("blocNoResult")[0].style = "display:flex";
        } else {
            if (data.val && data.val.length > i) {
                document.getElementsByClassName("blocUser")[0].style = "display:flex";
                document.getElementsByClassName("blocNoResult")[0].style = "display:none";
                setName(data.val[i].nom);
                setPrenom(data.val[i].prenom);
                setAge(data.val[i].age);
                setVille(data.val[i].ville);
            }
        }

    }

    const add = () => {
        setAnimationClass("animate-right");
        setTimeout(() => {
            setI(prevI => prevI + 1);
            setAnimationClass("");
        }, 400);
    };

    const next = () => {
        setAnimationClass("animate-left");
        setTimeout(() => {
            setI(prevI => prevI + 1);
            setAnimationClass("");
        }, 400);
    };

    const show = () => {
        navigate(`/wait`);
    };

    useEffect(() => {
        setI(0);
        fetchData();
    }, [tab]);

    useEffect(() => {
        fetchData();
    }, [i]);

    return <>
        <div className={`blocUser ${animationClass}`}>
            <div className='blocInfo'>
                <div className='blocImgUser'>
                    <img src={img} alt="imgUser" className='imgUser' />
                </div>
                <div className='infoUser'>
                    <p className='name'>{prenom}</p>
                    <p className='age'>{age}ans, {ville}</p>
                </div>
                <div className='blocButton'>
                    <button className="buttonCard" onClick={next}>❌</button>
                    <button className="buttonCard" onClick={show}>Show more</button>
                    <button className="buttonCard" onClick={add}>✅</button>
                </div>
            </div>

        </div>
        <div className='blocNoResult'>
            <div className='msgNoResult'>
                Aucun utilisateur trouvé
            </div>
        </div>

    </>

}

export default UserCard