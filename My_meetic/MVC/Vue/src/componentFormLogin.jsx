import './login.css';
import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from "react";



function FormLog() {

    const navigate = useNavigate();

    const [erreur, setErreur] = useState("");

    const submitClick = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/Controller/controllerConnect.php?mail=${document.querySelector('.email').value}&password=${document.querySelector('.pass').value}`);
        const data = await response.json();
        const r = await fetch(`http://localhost:8000/Controller/controllerGetId.php?mail=${document.querySelector('.email').value}`);
        const dat = await r.json();

        if (data.password === "No-email") {
            setErreur("Erreur d'adresse mail, réssayez.");
        } else {
            if (data.password === "bad") {
                setErreur("Erreur de mot de passe, réssayez.");
            } else if (data.password === "good") {
                if (dat.statut[0].statut === 0) {
                    setErreur("Votre compte est désactivé");
                } else {
                    const r = await fetch(`http://localhost:8000/Controller/controllerGetId.php?mail=${document.querySelector('.email').value}`);
                    const data = await r.json();
                    navigate(`/mainPage/${data.id[0][0]}`);
                }
            }
        }

    }



    return <>
        <div className='main'>
            <button className='bouton'> <Link to="/">Inscription</Link></button>
            <div className='blocFrom'>
                <div className="container">
                    <form className="form" onSubmit={submitClick}>
                        <h4>Connection</h4>

                        <label className='label'>
                            <input type="text" className="email input" name="email" placeholder="Entrez votre email" />
                        </label>

                        <label className='label'>
                            <input type="password" className="pass input" name="password" placeholder="Entrez votre mot de passe" />

                        </label>

                        <button className="submit" type="submit">submit</button>

                        <h5 className='msgErreur'>{erreur}</h5>
                    </form>
                </div>

            </div>

        </div>


    </>

}

export default FormLog