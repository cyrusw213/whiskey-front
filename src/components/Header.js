import { Link } from 'react-router-dom';

import { login, logout } from '../services/firebase'

import { FaHeart, FaHome, FaGlassWhiskey, FaPenNib, FaHandSpock, FaRegHandSpock } from "react-icons/fa";

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to='/'>
                <div className="home"><FaHome /></div>

            </Link>
            <ul>
                {
                    props.user
                        //   conditional rendering of login/logout based on user 
                        ? <li onClick={logout}><FaRegHandSpock /></li>
                        :
                        <li onClick={login}><FaPenNib /></li>
                }
            </ul>
            {props.user ?
                <Link to='/favorites'>
                    <div className="favs"><FaHeart /></div>
                </Link>
                : <></>}
        </nav>
    );
};

export default Header; 