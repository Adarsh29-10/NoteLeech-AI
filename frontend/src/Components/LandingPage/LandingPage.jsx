import React from 'react';
import LandingPageCards from '../Cards/LandingPageCards/LandingPageCards';
import ChatWithPDFButton from '../Buttons/ChatWithPdfButton/ChatWithPDFButton';
import CreateMagicalNotesButton from '../Buttons/CreateMagicalNotes/CreateMagicalNotesButton';
import LandingPageImage from '../../images/LandingPage.png';
import bg from '../../images/bg.jpg';
import AboutUsSection from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';

function LandingPage() {
    return (
        <div className="pt-20 px-6">
            <div
                className="flex flex-col items-center justify-center h-screen text-center bg-center relative rounded-3xl overflow-hidden"
                style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "100%", 
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                }}
            >
                {/* Fading edges */}
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
                    Welcome to <span className="text-blue-300">NoteLeech-AI</span>
                </h1>
                <p className="text-lg md:text-xl text-white max-w-2xl drop-shadow-md">
                    Your AI-powered note management solution.
                    Now create magical notes and chat with your PDFs seamlessly!
                </p>
                </div>
            </div>
            <div className="mt-16 flex justify-center">
                <LandingPageCards />
            </div>

            {/* Divider */}
            <div className="my-12 border-t border-gray-300 w-11/12 mx-auto" /> {/* replaced <hr/> with styled div */}

            {/* Action Buttons */}
            <div className="mt-10 flex justify-center items-center gap-6 flex-nowrap">
                <ChatWithPDFButton />
                <CreateMagicalNotesButton />
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-center py-20">
                <img
                    src={LandingPageImage}
                    alt="Find What You Need Instantly"
                    className="max-w-4xl w-full rounded-xl shadow-lg"
                />
            </div>
            <AboutUsSection />
            <Footer />
        </div>
    );
}

export default LandingPage;