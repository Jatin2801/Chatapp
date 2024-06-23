import React, { useState } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@mui/material'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined, } from '@mui/icons-material'
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios'

function Chat({ messages }) {

//For typing and sending messages 
//we gave input value as input so we can accesss it here 
const[input,setInput] = useState('')

const sendmsg = async(e) =>{
  e.preventDefault();

 await axios.post('/messages/new',{
    message: input , // the input which we give in box in chat window
    name : "Demo" ,
    received : false 
  })
  setInput('')
}

  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar />

        <div className='chat_headerInfo'>
          <h3>Room Name</h3>
          <p>last seen at... </p>
        </div>

        <div className='chat_headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className='chatBody'>
        {messages.map(message => (
          <p className={`chat_msg ${!message.received && "chat_receiver"} `}>
            <span className='chat_name'> {message.name}</span>
              {message.message} 
            <span className='timestamp'> {new Date().toUTCString()}</span>
          </p>
        ))}


        <p className='chat_msg chat_receiver'>
          <span className='chat_name'> Jatin</span>
          This is a msg
          <span className='timestamp'> {new Date().toUTCString()}</span>
        </p>

      </div>

      <div className='chat_footer'>
        <InsertEmoticon />
        <form>
          <input value={input} onChange={(e)=>setInput(e.target.value)} type='text' placeholder='Type a message..' /> 
          <button onClick={sendmsg} type='submit'>
            Send A Message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat