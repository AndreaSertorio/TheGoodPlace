//components/UserProfile.tsx

'use client'

import React, { useState, useEffect } from 'react';

interface UserProfileProps {
    username: string;
    averageScore: number;
    highScore: number;
    recentScores: number[];
    followers: number;
    following: number;
    // Puoi aggiungere altre props a seconda delle tue necessità
}

const UserProfile: React.FC<UserProfileProps> = ({
    username,
    averageScore,
    highScore,
    recentScores,
    followers,
    following,
}) => {
    const [profileImage, setProfileImage] = useState('/path-to-profile-image'); // Può essere aggiornato con useEffect o con un event listener

    useEffect(() => {
        // Qui potresti caricare i dati del profilo, come l'immagine del profilo, da un API o da un altro stato.
    }, []); // Aggiungi le dipendenze necessarie

    return (
        <div className="p-4 bg-white rounded shadow border border-silver-chalice">
            <div className="flex items-center space-x-4">
                <img src={profileImage} alt="Profilo" className="w-16 h-16 rounded-full" />
                <div>
                    <div className="font-bold text-lg text-peacock-blue">{username}</div>
                    <div className="text-sm text-ash-grey">Punteggio Medio: {averageScore}</div>
                    <div className="text-sm text-ash-grey">Punteggio Più Alto: {highScore}</div>
                </div>
            </div>
            <div className="mt-4">
                <div className="text-sm text-hippie-green">Ultimi Punteggi: {(recentScores || []).join(', ')}</div>
                <div className="text-sm text-hippie-green">Follower: {followers}</div>
                <div className="text-sm text-hippie-green">Seguiti: {following}</div>
            </div>
        </div>
    );
};

export default UserProfile;
