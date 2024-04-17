import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './account.css';
import React, { useState } from "react";
import NavBarre from './componentNav.jsx';
import NavBarreHaut from './compNavHAut.jsx';

function Account() {
    const navigate = useNavigate();
    let { id } = useParams();
    const [erreur, setErreur] = useState("");

    const hidden1 = async () => {
        const blocBase = document.getElementsByClassName("blocBase")[0];
        const blocChange = document.getElementsByClassName("formChange")[0];
        blocBase.style = "display:none";
        blocChange.style = "display:block";
    }

    const show1 = async () => {
        const blocBase = document.getElementsByClassName("blocBase")[0];
        const blocChange = document.getElementsByClassName("formChange")[0];
        blocChange.style = "display:none";
        blocBase.style = "display:block";
    }

    const hidden2 = async () => {
        const blocBase = document.getElementsByClassName("blocBase")[1];
        const blocChange = document.getElementsByClassName("formChange")[1];
        blocBase.style = "display:none";
        blocChange.style = "display:block";
    }

    const show2 = async () => {
        const blocBase = document.getElementsByClassName("blocBase")[1];
        const blocChange = document.getElementsByClassName("formChange")[1];
        blocChange.style = "display:none";
        blocBase.style = "display:block";
    }

    const hidden3 = async () => {
        const blocBase = document.getElementsByClassName("blocBase")[2];
        const blocChange = document.getElementsByClassName("formChange")[2];
        blocBase.style = "display:none";
        blocChange.style = "display:block";
    }

    const show3 = async () => {
        const blocBase = document.getElementsByClassName("blocBase")[2];
        const blocChange = document.getElementsByClassName("formChange")[2];
        blocChange.style = "display:none";
        blocBase.style = "display:block";
    }

    const hidden4 = async () => {
        const blocBase = document.getElementsByClassName("blocBase")[3];
        const blocChange = document.getElementsByClassName("formChange")[3];
        blocBase.style = "display:none";
        blocChange.style = "display:block";
    }

    const show4 = async () => {
        const blocBase = document.getElementsByClassName("blocBase")[3];
        const blocChange = document.getElementsByClassName("formChange")[3];
        blocChange.style = "display:none";
        blocBase.style = "display:block";
    }

    const hidden5 = async () => {
        const blocBase = document.getElementsByClassName("blocBase")[4];
        const blocChange = document.getElementsByClassName("formChange")[4];
        blocBase.style = "display:none";
        blocChange.style = "display:block";
    }

    const show5 = async () => {
        const blocBase = document.getElementsByClassName("blocBase")[4];
        const blocChange = document.getElementsByClassName("formChange")[4];
        blocChange.style = "display:none";
        blocBase.style = "display:block";
    }

    const hidden6 = async () => {
        const blocBase = document.getElementsByClassName("blocBase")[5];
        const blocChange = document.getElementsByClassName("formChange")[5];
        blocBase.style = "display:none";
        blocChange.style = "display:block";
    }

    const show6 = async () => {
        const blocBase = document.getElementsByClassName("blocBase")[5];
        const blocChange = document.getElementsByClassName("formChange")[5];
        blocChange.style = "display:none";
        blocBase.style = "display:block";
    }

    const hidden7 = async () => {
        const blocBase = document.getElementsByClassName("blocBase")[6];
        const blocChange = document.getElementsByClassName("formChange")[6];
        blocBase.style = "display:none";
        blocChange.style = "display:block";
    }

    const show7 = async () => {
        const blocBase = document.getElementsByClassName("blocBase")[6];
        const blocChange = document.getElementsByClassName("formChange")[6];
        blocChange.style = "display:none";
        blocBase.style = "display:block";
    }

    const changePrenom = async () => {
        await fetch(`http://localhost:8000/Controller/controllerChange.php?prenom=${document.querySelector('.prenom').value}&id=${id}`);
        fetchData();
    }

    const changeNom = async () => {
        await fetch(`http://localhost:8000/Controller/controllerChange.php?nom=${document.querySelector('.nom').value}&id=${id}`);
        fetchData();
    }

    const changeAge = async () => {
        await fetch(`http://localhost:8000/Controller/controllerChange.php?date=${document.querySelector('.birthdate').value}&id=${id}`);
        fetchData();
    }

    const changeVille = async () => {
        await fetch(`http://localhost:8000/Controller/controllerChange.php?ville=${document.querySelector('.ville').value}&id=${id}`);
        fetchData();
    }

    const changeMail = async () => {
        await fetch(`http://localhost:8000/Controller/controllerChange.php?mail=${document.querySelector('.mail').value}&id=${id}`);
        fetchData();
    }

    const changePassword = async () => {
        if (document.querySelector('.password').value != document.querySelector('.passwordConfirm').value) {
            setErreur("Erreur lors de la confirmation de mot de passe");
        } else {
            await fetch(`http://localhost:8000/Controller/controllerChange.php?mdp=${document.querySelector('.password').value}&id=${id}`);
            fetchData();
        }
    }

    const closeAccount = async () => {
        await fetch(`http://localhost:8000/Controller/controllerChange.php?stat=close&id=${id}`);
        navigate('/login');
    }

    const openAccount = async () => {
        await fetch(`http://localhost:8000/Controller/controllerChange.php?stat=open&id=${id}`);
    }

    const [ville, setVille] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [age, setAge] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [mail, setMail] = useState("");

    async function fetchData() {
        const r = await fetch(`http://localhost:8000/Controller/controllerChange.php?stat=open&id=${id}`);
        const data = await r.json();
        setMail(data.info[0].email);
        setPrenom(data.info[0].prenom);
        setNom(data.info[0].nom);
        setVille(data.info[0].ville);
        setAge(data.info[0].hobbies);
    }

    fetchData();

    return <>

        <NavBarreHaut />
        <div className='blocPage'>
            <NavBarre />


            {/*Bloc de Prenom*/}
            <div className='blocInfoUser'>
                <div className='blocBox'>

                    <div className='blocMod'>
                        <h3 className='title'>Prénom</h3>
                        {/*Bloc de modification*/}
                        <div className='formChange'>
                            <input type="text" className="prenom input" name="username" placeholder="" />
                            <button className='buttonDel' onClick={show1}>Annuler</button>
                            <button type="submit" className='buttonSub' onClick={() => { show1(); changePrenom() }}>Enregistrer</button>
                        </div>
                        {/*Bloc de modification*/}
                        {/*Bloc de base*/}
                        <div className='blocBase'>
                            <p className='affInfo'>{prenom}</p>
                            <button className='buttonDel' onClick={hidden1}>Modifier</button>
                        </div>
                        {/*Bloc de base*/}
                    </div>

                    {/*Bloc de Nom*/}
                    <div className='blocMod'>
                        <h3 className='title'>Nom</h3>
                        {/*Bloc de modification*/}
                        <div className='formChange'>
                            <input type="text" className="nom input" name="username" placeholder="" />
                            <button className='buttonDel' onClick={show2}>Annuler</button>
                            <button type="submit" className='buttonSub' onClick={() => { show2(); changeNom() }}>Enregistrer</button>
                        </div>
                        {/*Bloc de modification*/}
                        {/*Bloc de base*/}
                        <div className='blocBase'>
                            <p className='affInfo'>{nom}</p>
                            <button className='buttonDel' onClick={hidden2}>Modifier</button>
                        </div>
                        {/*Bloc de base*/}
                    </div>

                    {/*Bloc de Mail*/}
                    <div className='blocMod'>
                        <h3 className='title'>E-mail</h3>
                        {/*Bloc de modification*/}
                        <div className='formChange'>
                            <input type="text" className="mail input" name="username" placeholder="" />
                            <button className='buttonDel' onClick={show3}>Annuler</button>
                            <button type="submit" className='buttonSub' onClick={() => { show3(); changeMail() }}>Enregistrer</button>
                        </div>
                        {/*Bloc de modification*/}
                        {/*Bloc de base*/}
                        <div className='blocBase'>
                            <p className='affInfo'>{mail}</p>
                            <button className='buttonDel' onClick={hidden3}>Modifier</button>
                        </div>
                        {/*Bloc de base*/}
                    </div>

                    {/*Bloc de Age*/}
                    <div className='blocMod'>
                        <h3 className='title'>Hobbies</h3>
                        {/*Bloc de modification*/}
                        <div className='formChange'>
                            <select name="birthdate" className="birthdate select">
                                <option value="">--Please choose an option--</option>
                                <option value="musée">musée</option>
                                <option value="sport">sport</option>
                                <option value="jeux-vidéos">jeux-vidéos</option>
                                <option value="cinema">cinema</option>
                                <option value="voyage">voyage</option>
                                <option value="lecture">lecture</option>
                                <option value="musique">musique</option>
                            </select>
                            <button className='buttonDel' onClick={show4}>Annuler</button>
                            <button type="submit" className='buttonSub' onClick={() => { show4(); changeAge() }}>Enregistrer</button>
                        </div>
                        {/*Bloc de modification*/}
                        {/*Bloc de base*/}
                        <div className='blocBase'>
                            <p className='affInfo'>{age}</p>
                            <button className='buttonDel' onClick={hidden4}>Modifier</button>
                        </div>
                        {/*Bloc de base*/}
                    </div>




                    {/*Bloc de Ville*/}
                    <div className='blocMod'>
                        <h3 className='title'>Ville</h3>
                        {/*Bloc de modification*/}
                        <div className='formChange'>
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
                            <button className='buttonDel' onClick={show5}>Annuler</button>
                            <button type="submit" className='buttonSub' onClick={() => { show5(); changeVille() }}>Enregistrer</button>
                        </div>
                        {/*Bloc de modification*/}
                        {/*Bloc de base*/}
                        <div className='blocBase'>
                            <p className='affInfo'>{ville}</p>
                            <button className='buttonDel' onClick={hidden5}>Modifier</button>
                        </div>
                        {/*Bloc de base*/}
                    </div>

                    {/*Bloc de Password*/}
                    <div className='blocMod'>
                        <h3 className='title'>Mot de passe</h3>
                        {/*Bloc de modification*/}
                        <div className='formChange'>
                            <input type="password" className="password input" name="password" placeholder="Entrez votre mot de passe" />
                            <input type="password" className="passwordConfirm input" name="passwordConfirm" placeholder="Confirmez votre mot de passe" />
                            <button className='buttonDel' onClick={show6}>Annuler</button>
                            <button type="submit" className='buttonSub' onClick={() => { show6(); changePassword() }}>Enregistrer</button>
                        </div>
                        {/*Bloc de modification*/}
                        {/*Bloc de base*/}
                        <div className='blocBase'>
                            <p className='affInfo'>*******</p>
                            <button className='buttonDel' onClick={hidden6}>Modifier</button>
                        </div>
                        {/*Bloc de base*/}
                        <h5 className='msgErreur'>{erreur}</h5>
                    </div>

                    {/*Bloc de Statut*/}
                    <div className='blocMod'>
                        <h3 className='title'>Statut du compte</h3>
                        {/*Bloc de modification*/}
                        <div className='formChange'>
                            <button className='buttonDel' onClick={() => { show7(), openAccount() }}>Activer le compte</button>
                        </div>
                        {/*Bloc de modification*/}
                        {/*Bloc de base*/}
                        <div className='blocBase'>
                            <button className='buttonDel' onClick={() => { hidden7(), closeAccount() }}>Désactiver le compte</button>
                        </div>
                        {/*Bloc de base*/}

                    </div>
                </div>

            </div>

        </div>
    </>

}

export default Account