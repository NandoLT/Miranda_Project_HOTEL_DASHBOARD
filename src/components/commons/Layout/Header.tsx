import React, { useContext } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import miranda_logo from '../../../assets/images/travl_icon.PNG';
import AuthButton from '../AuthButton';
import { authContext } from '../../../contexts/user.context';

import '../../../assets/css/Header.css';

// const Header = ({ className, isLogged, onLogout, ...props }) => {
const Header = ({ className, isLogged, onLogOut, dispatch, ...props }) => {
    // console.log('HEADER', onLogOut, isLogged);

    const authData = useContext(authContext);

    console.log('AUTHDATA OK', authData);
      
    return (
        <header className={classNames('header', className)} {...props}>
            <Link to="/">
                <div className="header-logo">
                    <img src={miranda_logo} alt="logo miranda hoel" />
                </div>
            </Link>
            <nav className="header-nav">
                {isLogged ? 
                <>
                    {
                        authData.auth ?
                        <h4>
                            { authData.name} is logged!
                        </h4> :
                        authData.name
                    }
                    <Button
                    as={Link}
                    to="/booking"
                    variant="primary"
                    className="header-button"
                    >
                        Booking
                    </Button>
                    <Button
                        as={Link}
                        to="/rooms"
                        variant="primary"
                        className="header-button"
                    >
                        Rooms
                    </Button>
                    <Button
                        as={Link}
                        to="/users"
                        variant="primary"
                        className="header-button"
                    >
                        Users
                    </Button>
                    <Button
                        as={Link}
                        to="/contact"
                        variant="primary"
                        className="header-button"
                    >
                        Contact
                    </Button> 
                </> 
                : null
                }
                {/* <Button
                    as={Link}
                    to="/booking"
                    variant="primary"
                    className="header-button"
                >
                    Booking
                </Button>
                <Button
                    as={Link}
                    to="/rooms"
                    variant="primary"
                    className="header-button"
                >
                    Rooms
                </Button>
                <Button
                    as={Link}
                    to="/users"
                    variant="primary"
                    className="header-button"
                >
                    Users
                </Button>
                <Button
                    as={Link}
                    to="/contact"
                    variant="primary"
                    className="header-button"
                >
                    Contact
                </Button> */}
                    {
                        authData.auth ?
                        <h4>
                            { authData.name} is logged!
                        </h4> :
                        authData.name
                    }
            <AuthButton
                className="header-button"
                isLogged={isLogged}
                onLogout={onLogOut}
            />
            </nav>
        </header>
    );
};

export default Header;