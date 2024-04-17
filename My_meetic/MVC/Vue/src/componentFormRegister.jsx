import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react";


function FormRegister() {
    const [erreur, setErreur] = useState("");
    const navigate = useNavigate();

    const submitClick = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/Controller/controllerRegister.php?mail=${document.querySelector('.mail').value}`);
        const data = await response.json();


        if (data.test.length === 0) {
            if (parseInt(document.querySelector('.birthdate').value.substr(0, 4)) > 2006) {
                setErreur("Vous devez être majeur pour vous inscrire");
            } else {
                if (document.querySelector('.password').value != document.querySelector('.passwordConfirm').value) {
                    setErreur("Erreur lors de la confirmation de mot de passe");
                } else {
                    if (document.querySelector('.birthdate').value < 18) {
                        setErreur("Vous devez avoir 18 ans pour vous inscrire");
                    } else {
                        await fetch(`http://localhost:8000/Controller/controllerRegister.php?mail=${document.querySelector('.mail').value}&
                        prenom=${document.querySelector('.prenom').value}&nom=${document.querySelector('.nom').value}&
                        password=${document.querySelector('.password').value}&genre=${document.querySelector('.genre').value}&
                        ville=${document.querySelector('.ville').value}&birthdate=${document.querySelector('.birthdate').value}&hobbies=${document.querySelector('.hobbies').value}`);


                        const r = await fetch(`http://localhost:8000/Controller/controllerGetId.php?mail=${document.querySelector('.mail').value}`);
                        const data = await r.json();
                        navigate(`/mainPage/${data.id[0][0]}`);
                    }


                }

            }


        } else {
            setErreur("Adresse email déjà utilisé");
        }

    }

    return <>
        <div className='main'>
            <button className='bouton'> <Link to="/login">Connection</Link></button>
            <div className='blocFrom'>

                <div className="container">
                    <form onSubmit={submitClick}>
                        <h4 className="text-warning text-center pt-5">Inscription</h4>

                        <label className='label'>
                            <input type="text" className="mail input" name="email" placeholder="Entrez votre email" />
                        </label>

                        <label className='label'>
                            <input type="text" className="prenom input" name="username" placeholder="Entrez votre prénom" />
                        </label>
                        <label className='label'>
                            <input type="text" className="nom input" name="username" placeholder="Entrez votre nom" />
                        </label>

                        <label className='label'>Choose sexe:</label>

                        <select name="genre" className="genre select">
                            <option value="">--Please choose an option--</option>
                            <option value="Homme">Homme</option>
                            <option value="Femme">Femme</option>
                            <option value="Autre">Autre</option>
                        </select>

                        <label className='label'>Choose hobbies :</label>

                        <select name="hobbies" className="hobbies select">
                            <option value="">--Please choose an option--</option>
                            <option value="musée">musée</option>
                            <option value="sport">sport</option>
                            <option value="jeux-vidéos">jeux-vidéos</option>
                            <option value="cinema">cinema</option>
                            <option value="voyage">voyage</option>
                            <option value="lecture">lecture</option>
                            <option value="musique">musique</option>
                        </select>

                        <label className='label'>Choose city:</label>

                        <select name="ville" className="ville select">
                            <option value="">--Please choose an option--</option>
                            <option value="Paris">Paris</option>
                            <option value="Marseille">Marseille</option>
                            <option value="Lyon">Lyon</option>
                            <option value="Toulouse">Toulouse</option>
                            <option value="Nice">Nice</option>
                            <option value="Nantes">Nantes</option>
                            <option value="Montpellier">Montpellier</option>
                            <option value="Strasbourg">Strasbourg</option>
                            <option value="Bordeaux">Bordeaux</option>
                            <option value="Lille">Lille</option>
                            <option value="Rennes">Rennes</option>
                            <option value="Reims">Reims</option>
                            <option value="Saint-Étienne">Saint-Étienne</option>
                            <option value="Le Havre">Le Havre</option>
                            <option value="Toulon">Toulon</option>
                            <option value="Grenoble">Grenoble</option>
                            <option value="Dijon">Dijon</option>
                            <option value="Angers">Angers</option>
                            <option value="Nîmes">Nîmes</option>
                            <option value="Villeurbanne">Villeurbanne</option>
                        </select>

                        <label className='label'  >Choose your birthdate:</label>
                        <input className="birthdate input" type="number" id="birthdate" name="birthdate"></input>

                        <label className='label'>
                            <input type="password" className="password input" name="password" placeholder="Entrez votre mot de passe" />

                        </label>

                        <label className='label'>
                            <input type="password" className="passwordConfirm input" name="passwordConfirm" placeholder="Confirmez votre mot de passe" />
                        </label>

                        <button type="submit" className='submit'>submit</button>
                        <h5 className='msgErreur'>{erreur}</h5>
                    </form>
                </div>
            </div>

        </div>


    </>

}

export default FormRegister