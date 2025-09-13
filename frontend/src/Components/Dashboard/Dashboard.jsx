import React from 'react';
import NavBarDashboard from '../Header/DashboardNavBar/NavBarDashboard';
import { BookOpenTextIcon, ClipboardSignature, DotSquareIcon, Upload } from 'lucide-react';
import { Send, FileText, X } from 'lucide-react';

const Dashboard = () => {
    const items = [
        {icon: Upload, title: "Upload"},
        {icon: ClipboardSignature, title: "FlashCards"},
        {icon: BookOpenTextIcon, title: "Quiz"},
        {icon: DotSquareIcon, title: "Crux"},
    ]
    return (
        <>
        <div className='flex flex-col h-screen bg-[#0d1117]'>
            <NavBarDashboard />
            
            {/* Main Content Area - This will be your chat area in the future */}
            <main className='flex-1   overflow-hidden flex flex-col'>
                {/* Section 1 - Chat/Content Area */}
                <section className='flex-1 p-6 overflow-y-auto w-full max-w-6xl mx-auto'>
                   
                   <h1 className="text-white text-4xl text-center mt-20 font-semibold">
                        Namaste, it feels good to see you here.
                    </h1>

                    {/* main chatting logic  */}

                    
                </section>
                
                {/* Bottom Search Box - Fixed at bottom */}
                <section className='p-6'>
                    <div className="w-full max-w-4xl mx-auto">
                        <div className="bg-[#171717] border border-gray-600 rounded-xl shadow-lg">
                            {/* Options bar */}
                            <div className="p-3 border-b border-gray-600">
                                {items.map((item, index)=>{
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={index} 
                                            className='inline-flex rounded-md items-center justify-center bg-[#171717] border-[.1px] border-gray-600 hover:border-gray-200 gap-2 mr-4 px-2 py-1 cursor-pointer transition-all duration-200'
                                        >
                                            <Icon className='text-[#e9e9e9]' size={20}/>
                                            <h1 className='text-[#e9e9e9] font-semibold text-lg'>
                                                {item.title}
                                            </h1>
                                        </div>
                                    )
                                })}
                            </div>
                                
                            {/* Input Area */}
                            <div className="flex items-center p-4">
                                <input 
                                    type="text"
                                    placeholder="Ask about your PDF..."
                                    className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm"
                                    // onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                />
                                <button 
                                    className="ml-3 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-200"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
        </>
    );
};

export default Dashboard;