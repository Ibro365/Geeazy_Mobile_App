import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch(e) {
                        console.log(e);
                    }
                },
                register: async (firstName, lastName, email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(firstName, lastName, email, password);
                        await auth().currentUser.sendEmailVerification();
                    } catch(e) {
                        console.log(e);
                    }
                },
                
                logout: async () => {
                    try{
                        await auth().signOut();
                    } catch(e) {
                        console.log(e);
                    }
                }
            }}

            
        
        >
            {children}
        </AuthContext.Provider>
    )
}