'use client'

// components/LoginButton.tsx

import React from 'react';
import { FaGoogle } from 'react-icons/fa'; // Importa l'icona di Google da react-icons
import { signInWithPopup } from "firebase/auth";
// components/LoginButton.tsx
import { auth, googleAuthProvider } from '../../firebase';

const LoginButton: React.FC = () => {
    const handleLoginClick = async () => {
        try {
                    console.log(auth); // Logga l'istanza di auth

            console.log(googleAuthProvider); // Logga l'istanza del provider di Google

            await signInWithPopup(auth, googleAuthProvider);
            console.log("Utente connesso con successo");
        } catch (error) {
            console.error("Errore durante il login:", error);
        }
    };

    return (
        <button onClick={handleLoginClick} className="w-full p-2 mb-2 text-center rounded text-silver-chalice hover:bg-ash-grey flex items-center justify-center">
            <FaGoogle className="mr-2" /> {/* Icona di Google */}
            Login con Google
        </button>
    );
};

export default LoginButton;
