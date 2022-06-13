import { Navigate } from 'react-router-dom';
import parseAuthToken from '../../utils/parseToken';

const PrivateRoute = ({ isLogged, component, onLogOut }) => {

    const decodedJwt = parseAuthToken();
    
    if(decodedJwt.exp * 1000 < Date.now()) {
        onLogOut();
    } else {
        const RouteComponent = component;
        return isLogged ? <RouteComponent /> : <Navigate to="/login" />;
    }
    
}

export default PrivateRoute