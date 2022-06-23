import { Link } from 'react-router-dom';

import { login, logout } from '../services/firebase'

import { FaHeart, FaHome, FaGlassWhiskey, FaPenNib, FaHandSpock, FaRegHandSpock  } from "react-icons/fa";

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to='/'>
                <div className="home">
                    <span class="hoverHome" data-hover="Home">
                        <FaHome />
                    </span>
                </div>
                
            </Link>
            <ul>
                {
                    props.user
                        //   conditional rendering of login/logout based on user 
                        
                        ? <li onClick={logout}>
                            <span class="hoverLogout" data-hover="Logout">
                                <FaRegHandSpock />
                            </span>
                        </li>
                        
                        :
                        <li onClick={login}>
                            <span class="hoverLogin" data-hover="Login">
                                <FaPenNib />
                            </span>    
                        </li>
                }
               
            </ul>

            <Link to='/favorites'>
                <div className="favs">
                    <span className="favHover" data-hover="Favorites">
                        <FaHeart />
                    </span>
                </div>
            </Link>

        </nav>
    );
};

export default Header; 