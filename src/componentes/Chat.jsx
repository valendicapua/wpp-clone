import React from 'react'


function Chat({pp, contact, msg, time, unreadMsgs, active})  {
      console.log("Time:", time); // Verifica el valor de la propiedad

  return (
    //Container
    <div className={`flex justify-content items-center cursor-pointer w-100 h-[85px] px-3 hover:bg-[#202d33] ${active ? "bg-[#202d33]" : ""}`}>
        {/*Foto de perfil*/}
        <img className="rounded-full w-[50px] mr-5" src={pp} alt='foto-de-perfil'/>
        {/*Info*/}
        
        <div className='flex justify-between border-t border-neutral-700 w-100 h-100 py-3'>
            {/*Nombre y msj*/}
            <div className='flex flex-col justify-between text-white'>
                <h1 className='font-medium mb-1'>{contact}</h1>
                <p className={`text-sm ${
                !unreadMsgs ? "text-[#8796a1]" : "text-white"
                }`}>{msg}</p>
            </div>
            {/*Hora y cantidad de msjs*/}
            <div className='flex flex-col justify-between items-end h-100 text-xs'>
            
            <p className="text-emerald-500 min-w-[55px]">{time}</p>

            {unreadMsgs && (
                <div className='text-white bg-emerald-500 rounded-full w-[20px] h-[20px] flex justify-center items-center'>
                    <p className='text-emerald-900'>{unreadMsgs}</p>
                </div>
            )}    
            </div>
        </div>
    </div>
  )
}

export default Chat