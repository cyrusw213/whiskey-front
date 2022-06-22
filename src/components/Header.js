import { Link } from 'react-router-dom';

import { login, logout } from '../services/firebase'

import { FaGlassWhiskey, FaPenNib, FaHandSpock  } from "react-icons/fa";

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to='/'>
                <div className="home"><FaGlassWhiskey /></div>
                
            </Link>
            <ul>
                {
                    props.user
                        //   conditional rendering of login/logout based on user 
                        ? <li onClick={logout}><FaHandSpock /></li>
                        :
                        <li onClick={login}><FaPenNib /></li>
                }
            </ul>

        </nav>
    );
};

export default Header; 