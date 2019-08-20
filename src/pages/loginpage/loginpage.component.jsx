// jshint esversion:6
import React from 'react';
import './loginpage.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';

const LoginPage = () => {
    return (
        <div className="login-page">
            <SignIn/>
        </div>
    );
};

export default LoginPage;