// jshint esversion:6
import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ( { children, isGoogleSignIn, ...otherProps } ) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in loginBtn' : ''} custom-button`}
        {...otherProps}>
            {
                children
            }
        </button>
    );
};

export default CustomButton;