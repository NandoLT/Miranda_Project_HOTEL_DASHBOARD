
import T from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
// import { logout } from '../../../dataService/auth';
import logOutIcon from '../../assets/images/logout.svg'

const AuthButton = ({ className, onLogout, variant}) => {

    const navigate = useNavigate();
    
    const handleLogout = () => {
        onLogout();
        // navigate('/login');
    };

    return (
        <>
            <Button 
                as={Link}
                to="/login"
                className={className} 
                onClick={handleLogout} 
                variant={variant}
            >
                <img src={logOutIcon} alt='logout-icon' />
            </Button>
        </>
    )
    
};

AuthButton.propTypes = {
    className: T.string,
    onLogout: T.func.isRequired,
};


export default AuthButton;