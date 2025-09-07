import React from 'react';
import ChatWithPDFCard from '../../Components/Cards/LandingPageCards/ChatWithPDFCard';
import CreateNotesCard from '../../Components/Cards/LandingPageCards/CreateNotesCard';
import GenerateFlashcardCard from '../Cards/LandingPageCards/GenerateFlashcardCard';
import QuestionAnswerCard from '../Cards/LandingPageCards/QuestionAnswerCard';

function LandingPage() {
    return (
        <div className='h-screen pt-20 px-18 '>
            <h1>Welcome to NoteLeech-AI</h1>
            <p>Your AI-powered note management solution.</p>
            <div className='mt-10 flex space-x-6'>
                <ChatWithPDFCard />
                <CreateNotesCard />
                <br />
                <GenerateFlashcardCard/>
                <QuestionAnswerCard/>
            </div>
        </div>
    );
}

export default LandingPage;