import { Link } from 'react-router-dom';

import { login, logout } from '../services/firebase'

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to='/'>
                <div className="home">Home</div>
            </Link>
            <ul>
                {
                    props.user
                        //   conditional rendering of login/logout based on user 
                        ? <li onClick={logout}>Logout</li>
                        :
                        <li onClick={login}>Login</li>
                        
                }
            </ul>

            <Link to='/favorites'>
                <div className="favs">fav</div>
            </Link>

        </nav>
    );
};

export default Header; 