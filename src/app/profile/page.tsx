// profile/page.tsx

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SidebarLeft from '../components/SidebarLeft';
import UserProfile from '../components/UserProfile'; 
import UserPosts from '../components/UserPosts';

const Profile: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="main flex p-4 flex-grow">
                <SidebarLeft />
                <div className="flex flex-col space-y-4 w-full max-w-2xl mx-auto">
                    <UserProfile 
                      username="John Doe"
                      averageScore={85}
                      highScore={100}
                      recentScores={[85, 90, 80]}
                      followers={100}
                      following={50}
                    />
                    <UserPosts />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Profile;
