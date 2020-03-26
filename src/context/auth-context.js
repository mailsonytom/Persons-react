import React from 'react';

const AuthContext = React.createContext({
    autheticated: false,
    login: () => { }
});

export default AuthContext;