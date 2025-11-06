import React, { useState } from 'react';
import { Send, FileText, X } from 'lucide-react';
import UploadPdfBox from '../UploadPdfBox/UploadPdfBox'



const ChatWithPDF = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);

    const handleFileAccepted = async (file) => {
        setUploadedFile(file);
        setUploadStatus("Uploading PDF...");

        const formData = new FormData();
        formData.append('PDF', file);

        try {
            const response = await fetch('http://localhost:8000/pdf/upload', {
                method: 'POST',
                body: formData,
                onUploadProgress: (progress) => {
                    const percentCompleted = Math.round((progress.loaded * 100) / progress.total);
                    setUploadStatus(`Uploading... ${percentCompleted}%`);
                }
            });

            console.log('File uploaded successfully in chat with pdf:', response);
            setUploadStatus('File uploaded successfully!');
            
        } catch(error) {
            console.error('Error uploading file:', error);
            setUploadStatus('Upload failed. Please try again.');
            setUploadedFile(null); 
        }
    };

    const handleSend = () => {
        // if (inputText.trim()) {
        //     setMessages(prev => [...prev, { text: inputText, sender: 'user' }]);
        //     setInputText('');
        //     // Here you would typically send the message to your AI service
        // }
    };

    const handleRemoveFile = () => {
        setUploadedFile(null);
        setUploadStatus('');
        setMessages([]);
    };

    const getFileIcon = (fileName) => {
        if (fileName.toLowerCase().endsWith('.pdf')) {
            return (
                <div className="w-8 h-10 bg-red-500 rounded-sm flex items-center justify-center mr-3">
                    <span className="text-xs font-bold text-white">PDF</span>
                </div>
            );
        }
        // return <FileText className="w-6 h-6 mr-3 text-blue-400" />;
    };

    return (
        <div className='min-h-screen bg-[#0d1117]'>
            <div className='h-screen text-center flex flex-col items-center'>

                {/* Heading */}
                <h1 className='pt-20 text-4xl text-white mb-10'>NoteLeech AI</h1>

                {!uploadedFile ? (
                    <UploadPdfBox onFileAccepted={handleFileAccepted} />
                ) : (
                    <div className="w-full max-w-4xl flex-1 flex flex-col">
                        
                        {/* Chat Messages Area */}
                        <div className='flex-1'>
                            {/* pdf and chats logic */}
                        </div>


                        {/* Chat bar Container  */}
                        <div className="w-full max-w-4xl mx-auto mb-8 ">
                            <div className="bg-[#171717] border border-gray-600 rounded-xl shadow-lg">
                                
                                {/* File Preview Inside Input */}
                                <div className="p-3 border-b border-gray-600">
                                    <div className="inline-flex items-center bg-slate-700 text-white px-3 py-2 rounded-lg">
                                        {getFileIcon(uploadedFile.name)}
                                        <div className="flex-1 min-w-0 mr-3">
                                            <p className="text-sm font-medium truncate">{uploadedFile.name}</p>
                                            <p className="text-xs text-gray-300">{uploadStatus}</p>
                                        </div>
                                        
                                        <button 
                                            onClick={handleRemoveFile}
                                            className="text-gray-400 hover:text-white transition-colors"
                                            title="Remove file"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Input Area */}
                                <div className="flex items-center p-4">
                                    <input 
                                        type="text"
                                        value={inputText}
                                        onChange={(e) => setInputText(e.target.value)}
                                        placeholder="Ask about your PDF..."
                                        className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm"
                                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    />
                                    <button 
                                        onClick={handleSend}
                                        className="ml-3 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-200"
                                        disabled={!inputText.trim()}
                                    >
                                        <Send className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatWithPDF;