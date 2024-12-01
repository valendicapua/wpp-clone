import React, { useState , useEffect} from 'react';
import LeftMenu from '../componentes/LeftMenu.jsx';
import ChatDetail from '../componentes/ChatDetail.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from '../componentes/LoadingScreen.jsx';


//TODO: Animacion inicial WhatsApp
function WhatsApp () {

const [progress, setProgress] = useState(0);
const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    if (progress >= 100) setLoading(false);
    else {
      const increment = Math.floor(Math.random() * (10 + 1)) +3;
      setProgress(progress + increment)
    }
  }, 300)
}, [progress])

  return (
    <>
    {loading ? (
        <LoadingScreen progress={progress}/> 
      ) : (
            //Main Container:
    <div className='w-screen h-screen overflow-hidden'>
      {/*Content components:*/}

      
      <div className='flex justify-start whatsapp-bp:justify-center items-center bg-[#111a21] h-screen'>
        {/*left menu:*/}
        
        
        <div className='bg-[#111921] border-r-[1px] border-r-[#3c3c3c] min-w-[320px] max-w-[500px] w-100 h-100'>
          <LeftMenu />

        </div>
        {/*chats detail:*/}
        <div className='bg-[#222f35] min-w-[415px] max-w-[1120px] w-100 h-100'>
          <ChatDetail />

        </div>
      </div>

    </div>
      
      )}
    </>
  )
}

export default WhatsApp