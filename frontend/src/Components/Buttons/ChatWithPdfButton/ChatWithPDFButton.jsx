import { useNavigate } from "react-router-dom"

const ChatWithPDFButton = () =>{
    const navigate = useNavigate()
    return(
        <button 
            onClick={()=>navigate('/chat-with-pdf')}
            className='bg-green-500 hover:bg-green-600 rounded-lg px-8 py-4 text-white text-base font-semibold transition-colors duration-200 shadow-md w-full'>
            Chat with PDF
        </button>
    )
}

export default ChatWithPDFButton