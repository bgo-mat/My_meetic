import './mainPage.css';
import { useNavigate } from 'react-router-dom';

function NavBarreHaut() {
    const navigate = useNavigate();


    const navigCon = async () => {
        navigate(`/login`);
    }

    return <>

        <div className='blocContent'>
            <div className='barreHaut'>
                <button className='buttonDeco' onClick={navigCon}>Déconnexion</button>
            </div>
        </div>


    </>

}

export default NavBarreHaut