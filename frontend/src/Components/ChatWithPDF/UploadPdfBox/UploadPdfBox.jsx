import React from 'react';
import { UploadIcon } from 'lucide-react';

const UploadPdfBox = () => {
    return (
        <div 
            className='bg-white h-64 w-7xl border-2 border-dashed flex items-center justify-center flex-col gap-3 rounded-md hover:border-blue-500 transition-colors"'>
                
            <UploadIcon size={40} className='text-gray-500' />
            <h1 className='text-gray-500'>Upload your PDF</h1>
            <p className="text-xs text-gray-400">(Drag & drop or click to browse)</p>
        </div>
    );
};

export default UploadPdfBox;