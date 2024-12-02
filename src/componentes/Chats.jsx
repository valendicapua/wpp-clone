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