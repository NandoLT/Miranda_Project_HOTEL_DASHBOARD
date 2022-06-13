import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import miranda_logo from '../../../assets/images/travl_icon.PNG';
import AuthButton from '../AuthButton';
// import { authContext } from '../../../contexts/user.context';
import contactIcon from '../../../assets/images/envelop.svg'
import bookingIcon from '../../../assets/images/bell.svg'

import '../../../assets/css/Header.css';
import { LateralMenu } from '../LateralMenu';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'
const Header = ({ className, isLogged, onLogOut, dispatch, ...props }) => {

    // const authData = useContext(authContext);
    const [menuCollapse, setMenuCollapse] = useState(true)

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <header className={classNames('header', className)} {...props}>
            <Link to="/" className="link-logo">
                <div className="header-logo">
                    <img src={miranda_logo} alt="logo miranda hoel" />
                    <div className="logo-text">
                        <h2>travl</h2>
                        <h6>Hotel Admin Dashboard</h6>
                    </div>
                </div>
            </Link>
            <nav className="header-nav">
                {isLogged ? 
                <>
                    <div className="closemenu" onClick={menuIconClick}>
                        {menuCollapse ? (
                            <AiOutlineMenuUnfold/>
                            ) : (
                            <AiOutlineMenuFold/>
                        )}
                    </div>
                    {/* {
                        authData.auth ?
                        <h4>
                            { authData.name} is logged!
                        </h4> :
                        authData.name
                    } */}
                    <LateralMenu menuCollapse={menuCollapse} menuIconClick={menuIconClick} />
                    <Button
                        as={Link}
                        to="/contact"
                        variant="header-icons"
                        className="header-button contact-icon"
                    >
                        <img src={contactIcon} alt='contact-icon' />
                        <span className="counter">20</span>
                    </Button>
                    <Button
                        as={Link}
                        to="/booking"
                        variant="header-icons"
                        className="header-button"
                    >
                        <img src={bookingIcon} alt='contact-icon' />
                        <span className="counter">5</span>
                    </Button>
                    <AuthButton
                        className="header-button"
                        variant="header-icons"
                        onLogout={onLogOut}
                    />
                </> 
                : null
                }
            </nav>
        </header>
    );
};

export default Header;