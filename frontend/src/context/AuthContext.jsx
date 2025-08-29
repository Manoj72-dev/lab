import React, { createContext ,useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider =({children} ) =>{
    const [user, setUser] = useState(() => sessionStorage.getItem('user'));

    const login = (userData) =>{
        setUser(userData);
        sessionStorage.setItem('user', userData);
    };

    const logout = () =>{
        setUser(null);
        sessionStorage.removeItem("user");
    };

    return(
        <AuthContext.Provider value={{user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};