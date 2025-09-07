import React from 'react';
import LandingPageCards from '../Cards/LandingPageCards/LandingPageCards';

function LandingPage() {
    return (
        <div className='h-screen pt-20 px-18 '>
            <h1>Welcome to NoteLeech-AI</h1>
            <p>Your AI-powered note management solution.</p>
            <div className='mt-10 flex space-x-6'>
                <LandingPageCards />
            </div>
        </div>
    );
}

export default LandingPage;