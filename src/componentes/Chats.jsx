import React, {useState, useEffect} from 'react'
import {ImFolderDownload} from 'react-icons/im'
import {chatsData} from '../data/whatsapp'
import Chat from './Chat'

function Chats({filter}) {

    const [chats, setChats] = useState(chatsData);

  useEffect(() => {
    const newChats = filter
      ? chatsData.filter((chat) => chat.unreadMsgs)
      : chatsData;
      setChats(newChats);
  }, [filter]);

  return (
    //Main Container
    <div className='flex flex-col overflow-y-scroll cursor-pointer h-100'>
    {/*Container Archivado/s*/}
        <div className='flex justify-between items-center w-100 min-h-[55px] px-3 hover:bg-[#202d33]'>
            
            <div className='flex justify-around items-center w-[150px]'>
                <span className='text-emerald-500 text-lg'>
                    <ImFolderDownload />
                </span>
                <h1 className='text-white text-sm'>Archivados</h1>
            </div>
            {/** Cantidad de chats arhivados */}
            <p className='text-emerald-500 text-xs font-light'>7</p>
        </div>

        {/*Chats map function*/}
        {chats.map((chat, i) => {
            return (
                <Chat 
                    pp={chat.pp}
                    contact={chat.contact}
                    msg={chat.msg}
                    unreadMsgs={chat.unreadMsgs}
                    time={chat.time}
                    active={i === 0}
                />
            );
        })}
    </div>
  )
}

export default Chats