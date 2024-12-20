import React, {useState, useRef, useEffect} from 'react'
import Button from './Common/Button'
import Message from './Message'
import { messagesData } from '../data/whatsapp'
import { messagesData1 } from '../data/whatsapp'
import { MdSearch, MdSend } from 'react-icons/md'
import { HiDotsVertical } from 'react-icons/hi'
import { BiHappy } from 'react-icons/bi'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { cs1, cs2 } from '../assets/whatsapp'
import { getTime } from '../logic/whatsapp'
import {chatsData} from '../data/whatsapp'

function ChatDetail () {

  const [messages, setMessages] = useState(messagesData);
  const [typing, setTyping] = useState(false);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);


  //Functions

  const addMessage = (msg) =>{
    const newMessages = [...messages, msg]
    setMessages(newMessages)
  }
  const handleInputMessage = () => {
    inputRef.current.value.length === 0 ? setTyping(false) : setTyping(true);
  }
  const handleEmojiClick = () => {
    inputRef.current.value += '⚡️';
    inputRef.current.focus();

  }
  const handleImgClick = () => {
    addMessage(
      {
      img: cs2,
      time: getTime(),
      sent: true
    })
    inputRef.current.value += '';
  }

  const handleInputSubmit = () => {
    if (inputRef.current.value.length > 0 ){
      addMessage({
      msg: inputRef.current.value,
      time: getTime(),
      sent: true,
    });
    inputRef.current.value = '';
    inputRef.current.focus();
    setTyping(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"})
  }, [messages])

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter") {
        handleInputSubmit();
      }
    }

    document.addEventListener('keydown', listener);
      return () => document.removeEventListener('keydown', listener)
    
  })
  return (
    //Container
    <div className='flex flex-col h-screen'>
      {/*Contact Nav*/}
        <div className='flex justify-between bg-[#202d33] h-[60px] p-3'>
          <div className='flex items-center'>
              <img src={chatsData[0].pp} alt='profile-picture' className='rounded-full w-[45px] h-[45px] mr-5'/>
          
              <div className='flex flex-col'>
                  <h1 className='text-white font-medium'>{chatsData[0].contact}</h1>
                  <p className='text-[#8796a1] text-sm font-light'>{chatsData[0].status}</p>
              </div>
          </div>

          <div className='flex justify-between items-center w-[85px]'>
            <Button icon={<MdSearch />} />
            <Button icon={<HiDotsVertical />} />

          </div>
        </div>
      {/*Messages Section*/}
      <div
        className="bg-[#0a131a] bg-[url('assets/images/bg.webp')] bg-contain overflow-y-scroll h-100"
        style={{ padding: "12px 2%" }}
      >
        {messages.map((msg) =>(
          <Message 
            key={msg.id}
            msg={msg.msg}
            time={msg.time}
            isLink={msg.isLink}
            img={msg.img}
            sent={msg.sent} 
          />
        ))}
            <div ref={bottomRef}></div>
            </div>

      {/*Bottom Section*/}
        <div className='flex items-center bg-[#202d33] w-100 h-[70px] p-2'>
            {/*emoji btn*/}
            <Button icon={<BiHappy />} onClick={handleEmojiClick}/>


            {/*upload btn*/}

            <span className='mr-2'>
              <Button icon={<AiOutlinePaperClip />} onClick={handleImgClick}/>
            </span>


            {/*input bar*/}

            <input 
            typeof='text'
            placeholder= 'Type a message'
            className='bg-[#2c3943] rounded-lg outline-none text-sm text-neutral-200 w-100 h-100 px-3 placeholder:text-sm placeholder:text-[#8796a1] '
            onChange={handleInputMessage}
            ref={inputRef}
             />
          

            {/*mic/send btn*/}
            <span className='ml-2'>
            {typing 
            ? (<Button icon={<MdSend />} onClick={handleInputSubmit}/>
            ) : ( 
              <Button icon={<BsFillMicFill />} />
              )}
            
            </span>

        </div>


    </div>
  )
}

export default ChatDetail