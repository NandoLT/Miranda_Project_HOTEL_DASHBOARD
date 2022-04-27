import '../../../assets/css/Footer.css';
import travl_icon from '../../../assets/images/travl_icon.PNG';

const Footer = () => {
    return (
        <footer className="footer-content">
            <div className="content has-text-centered">
                <p>
                <strong>MIRANDA CPANEL</strong>
                <img src={ travl_icon } alt="Miranda Dashboard" /> 
                </p>
            </div>
        </footer>
    );
}

export default Footer;