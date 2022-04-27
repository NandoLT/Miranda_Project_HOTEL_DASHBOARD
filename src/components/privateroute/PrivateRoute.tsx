import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isLogged, component }) => {

    const RouteComponent = component;
    return isLogged ? <RouteComponent /> : <Navigate to="/login" />;
}

export default PrivateRoute