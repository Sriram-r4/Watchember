import { Link } from 'react-router-dom';
import './Header.css';
import profileicon from '../assets/profileicon.svg';
import logoBlue from '../assets/logo-blue.png';

export default function Header(){
    return(
    <div className="header">
        <div >
            <Link to='/home' className='header-title'>
                <img src={logoBlue} alt='logo' className='header-logo'/>
                <div > Watchember</div>          
            </Link></div>
        <div className="header-nav">
            <Link to='/signin' className="header-nav-items">Sign In</Link>
            <Link to='/signup' className="header-nav-items">Sign Up</Link>
            <Link to='/profile' className="header-nav-items">
                <div className="header-profile">
                    <img src={profileicon} alt="icon"/>
                </div>
            </Link>
        </div>
    </div>
    );
}