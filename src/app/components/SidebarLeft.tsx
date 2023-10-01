import React from 'react';
import Link from 'next/link';
import { FaHome, FaSearch, FaPlusSquare, FaBell, FaEnvelope, FaUser } from 'react-icons/fa'; // Importa le icone da react-icons

const SidebarLeft: React.FC = () => {
    return (
        <aside className="sidebarLeft w-64 p-4 bg-hippie-green rounded shadow text-white">
            <Link href="/home">
                <button className="w-full p-2 mb-2 text-center rounded text-silver-chalice hover:bg-ash-grey flex items-center justify-center">
                    <FaHome className="mr-2" /> {/* Icona di casa */}
                    Home
                </button>
            </Link>
            <Link href="/search">
                <button className="w-full p-2 mb-2 text-center rounded text-silver-chalice hover:bg-ash-grey flex items-center justify-center">
                    <FaSearch className="mr-2" /> {/* Icona di lente d'ingrandimento */}
                    Cerca Profili
                </button>
            </Link>
            <Link href="/add-content">
                <button className="w-full p-2 mb-2 text-center rounded text-silver-chalice hover:bg-ash-grey flex items-center justify-center">
                    <FaPlusSquare className="mr-2" /> {/* Icona di più */}
                    Aggiungi Contenuti
                </button>
            </Link>
            <Link href="/notifications">
                <button className="w-full p-2 mb-2 text-center rounded text-silver-chalice hover:bg-ash-grey flex items-center justify-center">
                    <FaBell className="mr-2" /> {/* Icona di campana */}
                    Notifiche
                </button>
            </Link>
            <Link href="/messages">
                <button className="w-full p-2 mb-2 text-center rounded text-silver-chalice hover:bg-ash-grey flex items-center justify-center">
                    <FaEnvelope className="mr-2" /> {/* Icona di busta */}
                    Messaggi
                </button>
            </Link>
            <Link href="/profile">
                <button className="w-full p-2 mb-2 text-center rounded text-silver-chalice hover:bg-ash-grey flex items-center justify-center">
                    <FaUser className="mr-2" /> {/* Icona di utente */}
                    Profilo
                </button>
            </Link>
        </aside>
    );
};

export default SidebarLeft;
