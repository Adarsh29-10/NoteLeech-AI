import React from 'react';
import NavBarDashboard from '../Header/DashboardNavBar/NavBarDashboard';
import { BookOpenTextIcon, ClipboardSignature, DotSquareIcon, Upload } from 'lucide-react';

const Dashboard = () => {
    const items = [
        {icon: Upload, title: "Upload New Notes"},
        {icon: ClipboardSignature, title: "Generate FlashCards"},
        {icon: BookOpenTextIcon, title: "Generate Quiz"},
        {icon: DotSquareIcon, title: "Crux of the topic"},
    ]
    return (
        <>
        
        <div className='flex flex-col h-screen cursor-pointer'>
            <NavBarDashboard />
            <main className='flex-1 overflow-y-auto px-18 py-8 bg-[#0c0c0c]'>
                {/* section 1 */}
                <section className='flex  gap-10 '>
                    {items.map((item, index)=>{
                        const Icon = item.icon;
                        return (
                            <div
                                key={index} 
                                className='h-48 w-72 rounded-md flex flex-col items-center justify-center bg-[#171717] border-[.1px] border-[#e9e9e949] hover:border-[#e9e9e9]'
                            >
                                
                                <Icon className='text-[#e9e9e9]' size={52}/>
                                <h1 className='text-[#e9e9e9] font-semibold text-xl sm:text-2xl 
                                mt-4'>{item.title}</h1>

                            </div>
                        )
                    })}
                </section>


                {/* section 2 */}
                <section className='flex-1 mt-10 max-w-7xl '>
                    
                    {/* fixed top bar */}
                    <div 
                        className='w-full text-white py-2 px-4 rounded-sm font-semibold text-sm flex items-center justify-between'
                    >
                        <h1 className=''>Name</h1>
                        <div className=' w-1/6 flex justify-evenly'>
                            <h1 className='hidden md:block'>Created</h1>
                            <h1 className='hidden md:block'>Edited</h1>
                        </div>
                    </div>
                    
                    {/* all data */}
                    <div 
                        className='w-full text-white py-2 pl-4 pr-3 rounded-sm font-semibold text-xl border-y-[.1px] border-[#e9e9e949]
                        hover:bg-[#171717] flex items-center justify-between'
                    >
                        <h1>JavaScript with Adarsh</h1>
                        <div className=' w-1/6 flex justify-evenly'>
                            <h1 className='text-sm hidden md:block'>1 week</h1>
                            <h1 className='text-sm hidden md:block'>1 month</h1>
                        </div>
                    </div>
                </section>
            </main>
        </div>
        </>
    );
};

export default Dashboard;