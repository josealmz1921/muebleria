import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faSignOutAlt,faUserAlt} from '@fortawesome/free-solid-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return ( 
        <header>
            <img src="" alt="logo.png"/>
            <div>
                <button><FontAwesomeIcon icon={faUserAlt}/></button>
                <button><FontAwesomeIcon icon={faBars}/></button>
                <button><FontAwesomeIcon icon={faSignOutAlt}/></button>
            </div>
        </header>
     );
}
 
export default Header;