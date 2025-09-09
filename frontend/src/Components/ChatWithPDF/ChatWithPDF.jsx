import React from 'react';
import UploadPdfBox from './UploadPdfBox/UploadPdfBox';

const ChatWithPDF = () => {
    return (
        <>
            <div className='min-h-screen bg-gray-100 '>
                <div className=' h-screen text-center flex flex-col items-center gap-10'>

                    {/* heading */}
                    <h1 className='pt-20 text-4xl'>NoteLeech AI</h1>

                    {/* upload pdf section */}
                    <UploadPdfBox />

                    {/* Chat section */}
                    <div>
                        <input 
                            type="text"
                            placeholder='Enter Your text here'
                            className='h-10  sm:h-12 sm:w-7xl bg-white text-black px-2 rounded-md outline-none'
                            />
                    </div>
                </div>



                
            </div>
        </>
    );
};

export default ChatWithPDF;