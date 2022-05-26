import React, { useEffect, useState } from 'react';
import { LoginForm } from './LoginForm';
import { useNavigate } from 'react-router-dom';
import storage from '../../utils/storage';
import { UPDATE_AUTH, UPDATE_EMAIL, UPDATE_NAME } from '../../useReducer/authActionsTypes'
import { login } from '../../dataService/auth/auth';
import { toast } from 'react-toastify';
// import { configureClient } from "../../dataService/client";
import parseAuthToken from '../../utils/parseToken';

import '../../assets/css/Login.css';

export const Login = ({ isLogged, dispatch })  => {

    let navigate = useNavigate();

    const launchToast = (error) => {
        console.log('TOAST');
        toast.error(`${error}`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
        }); 
    }

    useEffect(() => {
        if(isLogged) {
            navigate('/');
        }
    }, [isLogged, navigate])

    const handleSubmit = async (credentials) => {
        try {

            const { data } = await login(credentials);
            // configureClient(data.token);

            storage.set('authToken', data.token, true);

            dispatch({type: UPDATE_AUTH, value: true});
            storage.set('auth', true);

            parseAuthToken();
        }catch (error) {
            launchToast(error.error);
        }

    }

    return (
        <>
            <div className="loginPage">
                <h1 className="loginPage-title">Miranda Dashboard Login</h1>
                <LoginForm onSubmit={handleSubmit} />
            </div>
        </>
    )
}

