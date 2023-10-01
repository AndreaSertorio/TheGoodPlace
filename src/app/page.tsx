import React from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Post from './components/Post';
import SidebarLeft from './components/SidebarLeft'; // Aggiunto
import SidebarRight from './components/SidebarRight'; // Aggiornato
import Footer from './components/Footer';
import './globals.css';

const Page: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Head>
      <title>The Good Place</title>
    </Head>
    <Navbar />
    <main className="main flex p-4 flex-grow">
      <SidebarLeft /> {/* Aggiunto */}
      <div className="flex flex-col space-y-4 w-full max-w-2xl mx-auto">
        <Post />
        <Post />
        <Post />
      </div>
      <SidebarRight /> {/* Aggiornato */}
    </main>
    <Footer />
  </div>
);

export default Page;
