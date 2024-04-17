import logo from './assets/logo.png';

import './mainPage.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function NavBarre() {
    const navigate = useNavigate();
    let { id } = useParams();

    const navigAcc = async () => {
        navigate(`/account/${id}`);
    }

    const navigMain = async () => {
        navigate(`/mainPage/${id}`);
    }

    const navigWait = async () => {
        navigate(`/wait/${id}`);
    }

    return <>
        <div className='blocNav'>
            <div className='logo'>
                <img src={logo} className='logoImg' onClick={navigMain} />
            </div>
            <div className='monCompte' onClick={navigMain} >Découvrir</div>
            <div className='monCompte' onClick={navigWait} >Messages</div>
            <div className='monCompte' onClick={navigWait} >Mes likes</div>
            <div className='monCompte' onClick={navigAcc}>Mon compte</div>

        </div>
    </>

}

export default NavBarre