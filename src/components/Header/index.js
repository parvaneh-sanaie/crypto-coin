import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import React from 'react';

import PropTypes from 'prop-types';
import SearchField from '../SearchField';
import ProgressBar from '../ProgressBar';

function Header({ showProgress }) {
    return (
        <div data-testid="Header">
            <nav data-testid="navbar" className="navbar navbar-expand navbar-dark bg-dark">
                <a data-testid="homeLink" className="navbar-brand ps-3" href="/">
                    <FontAwesomeIcon icon={faHouse} className="fa-fw me-2" />
                    Crypto Coin
                </a>
                <SearchField />
                <ul data-testid="userProfileLink" className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <FontAwesomeIcon icon={faUser} className="fa-fw" />
                        </a>
                    </li>
                </ul>
            </nav>
            {showProgress && <ProgressBar />}
        </div>
    );
}
Header.propTypes = {
    showProgress: PropTypes.bool,
};
Header.defaultProps = {
    showProgress: false,
};
export default Header;
