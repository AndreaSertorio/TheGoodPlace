import React from 'react';
import Post from './Post'; // Usa il componente Post già esistente

const UserPosts: React.FC = () => {
    return (
        <div>
            <h2 className="text-peacock-blue">I Miei Post</h2>
            <Post />
            <Post />
            {/* Aggiungi quanti Post componenti desideri, o rendi dinamico con un array di dati */}
        </div>
    );
};

export default UserPosts;
