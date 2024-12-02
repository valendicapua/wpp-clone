import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Chats from './Chats'
import Button from './Common/Button'
import { BsFillPeopleFill } from "react-icons/bs";
import { TbCircleDashed } from "react-icons/tb";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";
import { pp } from '../assets/whatsapp'


function LeftMenu () {

  const[filter, setFilter] = useState(false);



  return (
    <div className='flex flex-col border-r border-neutral-700 w-100 h-screen'>
      {/*Profile nav*/}
      <div className='flex justify-between items-center bg-[#202d33] h-[60px] p-3'>
        <img src={pp} alt="foto-de-perfil" className='rounder-full w-[40px]'/>

        {/** Profile nav buttons */}
        <div className='flex justify-between w-[175px] responsive'>
        <Button icon={<BsFillPeopleFill />}/>
        <Button icon={<TbCircleDashed />}/>
        <Button icon={<BsFillChatLeftTextFill />}/>
        <Button icon={<HiDotsVertical />}/>

        </div>
      </div>
      {/*Search y filtros*/}
      <div className='flex justify-between items-center h-[60px] p-2 '>
      {/** Search */}
        <input type='text' placeholder='Search or start a new chat '
        className='responsive rounded-lg bg-[#202d33] text-[#8796a1] text-sm font-light outline-none px-4 py-2 w-100 max-w-[400px] h-[35px] placeholder:text-color-[#8796a1] placeholder:text-sm placeholder:font-light'>

        </input>
          {/** Filtros */}
        <button className={`text-2xl m-2 p-1 rounded-full ${
        filter 
          ? "bg-emerald-500 text-white rounded-full hover:bg-emerald-700" 
          : "text-[#8796a1] hover:bg-[#3c454c]"
        }`}
        onClick={() => setFilter(!filter)}>
        <BiFilter />
        </button>

      </div>
      {/*Chats*/}
        <Chats  filter ={filter}/>
    </div>
  )
}

export default LeftMenu