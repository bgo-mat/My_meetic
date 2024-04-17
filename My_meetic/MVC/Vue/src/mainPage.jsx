import './mainPage.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import NavBarre from './componentNav.jsx';
import NavBarreHaut from './compNavHAut.jsx';
import Search from './compoSearch.jsx';

function MainPage() {
    const navigate = useNavigate();
    let { id } = useParams();

    const navig = async () => {
        navigate(`/account/${id}`);
    }

    return <>
        <NavBarreHaut />
        <div className='blocMain'>
            <NavBarre />
            <div className='blocAff'>
                <Search />
            </div>
        </div>




    </>

}

export default MainPage