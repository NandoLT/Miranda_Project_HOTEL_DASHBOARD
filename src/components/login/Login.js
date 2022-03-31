import React, { useEffect, useState } from 'react';
import { LoginForm } from './LoginForm';
import { useNavigate } from 'react-router-dom';
import storage from '../../utils/storage';
// import {login} from '../../../dataService/auth';
// import Loader from '../commons/Loader';

import '../../assets/css/Login.css';

export const Login = ({isLogged})  => {
    let navigate = useNavigate()
    const [error, setError] = useState(null);
    // const [isLoading, setIsLoading] = React.useState(false);

    useEffect(() => {
        if(isLogged) {
            navigate('/');
        }
    }, [])

    const handleSubmit = async (credentials, remember) => {
        setError(null);
        // setIsLoading(true);
        // try {
        //     await login(credentials, remember);
        //     isLogged.current = true;
        // } catch (error) {
        //     setError(error);
        // }finally{
        //     setIsLoading(false);
        // }
        console.log(credentials.email, credentials.password);
        if((credentials.email !== 'fernando.lopez.dev@hotmail.com') || (credentials.password !== '123456')) {
            setError('Invalid Credentials');
        } else {
            storage.set('auth', true);
        }
        if(remember){
            for(const credential in credentials) {
                storage.set(credential, credentials[credential]);
            }
        }
        window.location.reload(true);
    }
    return (
        <>
            {/* { isLoading && <Loader />} */}
            <div className="loginPage">
                <h1 className="loginPage-title">Miranda Dashboard Login</h1>
                {/* <LoginForm onSubmit={handleSubmit} isLoading={isLoading}/> */}
                <LoginForm onSubmit={handleSubmit} />
                { error && <div className="loginPage-error">
                    {error}
                    <h5>Remember:</h5>
                    <h5>fernando.lopez.dev@hotmail.com</h5>
                    <h5>123456</h5>
                    </div>}
            </div>
        </>
    )
}

