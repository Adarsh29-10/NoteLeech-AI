import { useNavigate } from "react-router-dom"

const CreateMagicalNotesButton = () =>{
    const navigate = useNavigate()
    return(
        <button
            onClick={()=>navigate('/dashboard')}
            className="bg-green-500 hover:bg-green-600 rounded-lg px-8 py-4 text-white text-base font-semibold transition-colors duration-200 shadow-md w-full">
            Create Magical Notes
        </button>
    )
}

export default CreateMagicalNotesButton