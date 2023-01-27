import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Header = ({ setListRoutines, setIsLoading }) => {

    const [inputValue, setInputValue] = useState("");
    // console.log(inputValue)

    const handleInputChange = (e) => setInputValue(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const response = await fetch("https://openai-backend-production-46fc.up.railway.app/openai/fitnessgenerator", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt: inputValue
                })
            })
            const jsonData = await response.json();
            setListRoutines(jsonData.data)
        } catch(error){
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }



  return (
    <div className="bg-gradient-to-r from-slate-900 to-sky-600">
        <div className="container mx-auto max-w-5xl px-2 py-6">
            <p className="block text-white font-bold text-xl">Generador de rutinas <span className="text-indigo-300">IA</span></p>
            <div className="mt-14 text-white">
                <h2 className="font-bold text-xl max-w-xs bm-1">Pon a prueba el poder de la IA para crear una rutina de ejercicios</h2>
                <p className="font-light opacity-80 hidden md:inline-block">Creado con inteligencia artifical</p>

                <form className="relative my-8  max-w-md" onSubmit={handleSubmit}>
                    <input value={inputValue} onChange={handleInputChange} className="indent-2 text-slate-900 py-4 pr-[4.5rem] rounded-sm bg-gray-200 w-full md:max-w-md focus:ring-primary outline-none focus:ring-1" 
                    placeholder="Escribe que deseas ejercitar hoy día"
                    type="text" />
                    <button type="submit" className="absolute bottom-2.5 right-2.5 bg-slate-800 text-white px-2 py-2 rounded-sm text-sm ">
                    <ArrowLongRightIcon className="h-6"/>
                    </button>
                </form>
            </div>
        </div>
        
        
    </div>
  )
}

export default Header