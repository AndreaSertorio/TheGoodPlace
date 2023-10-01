// components/Navbar.tsx
import React from 'react';
import LoginButton from './LoginButton'; // Importa il nuovo componente bottone di login

const Navbar: React.FC = () => (
    <nav className="navbar flex justify-between p-4 text-lightning-yellow bg-peacock-blue border-b border-silver-chalice">
        <div className="font-bold text-center text-3xl">The Good Place</div>
        <LoginButton />
    </nav>
);

export default Navbar;
