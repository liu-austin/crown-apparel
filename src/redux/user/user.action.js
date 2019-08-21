// jshint esversion:6
export const setCurrentUser = (user) => {
    return ({
        type: 'SET_CURRENT_USER',
        payload: user
    });
};