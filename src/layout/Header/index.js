import React from 'react';
import { NavLink } from 'react-router-dom';

import { useHistory } from 'react-router-dom';

const Header = () => {

    const history = useHistory();

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <button id='back-button' onClick={history.goBack}>Back</button>
        </nav>
    );
}

export default Header;
