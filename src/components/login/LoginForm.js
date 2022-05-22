import React, { useState, useEffect } from 'react';
import T from 'prop-types';
import {Button} from '../commons/Button';
import FormField from '../commons/FormField';
import storage from '../../utils/storage';


import '../../assets/css/LoginForm.css';

const userEmail = '';
const userPassword = '';
// const userEmail = 'fernando.lopez.dev@hotmail.com';
// const userPassword = 123456;

export const LoginForm = ({onSubmit}) => {
    const [credentials, setCredentials] = useState({
        email:'',
        password:''
    });
    const [remember, setRemember] = useState(false)

    useEffect(() => {     
        if(userEmail && userPassword) {
            const savedCredentials = {email:userEmail, password:userPassword};
            setCredentials(savedCredentials);
        } else {
            setCredentials({email:'', password:''});
        }
    }, [])

    const handleChangeCredentials = event => {
        setCredentials(oldCredentials => ({
            ...oldCredentials,
            [event.target.name]: event.target.value,
        }));
    };

    const handleRemember = () => {
        setRemember(!remember);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(credentials, remember);
    }

    const {email, password} = credentials
    return (
        <form className="loginForm" onSubmit={handleSubmit}>
            <FormField
                type="email"
                name="email"
                placeholder="fernando.lopez.dev@hotmail.com"
                label="E-mail"
                className="loginForm-field"
                value={email}
                onChange={handleChangeCredentials}
            />
            <FormField
                type="password"
                name="password"
                label="password"
                placeholder="123456"
                className="loginForm-field"
                value={password}
                onChange={handleChangeCredentials}
            />
            <Button 
                type="submit"
                className="loginForm-submit"
                variant="primary"
                disabled={ !email || !password}
            >
            Log in
            </Button>
            {/* <FormField
                type="checkbox"
                name="remember"
                label="Remember Me"
                className="loginForm-remember"
                onChange={handleRemember}
            /> */}
        </form>
    );
}

LoginForm.propTypes = {
    onSubmit: T.func.isRequired,
}
