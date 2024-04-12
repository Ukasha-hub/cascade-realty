import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {createContext, useEffect, useState} from 'react';
import app from './firebase.config';


export const AuthContext= createContext('null')


const auth= getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const signIn= (email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            console.log('user auth changed', currentUser)
            setUser(currentUser)
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const AuthInfo={user, createUser, logOut, signIn}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;