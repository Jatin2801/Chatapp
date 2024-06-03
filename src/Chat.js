import React from 'react'
import './Chat.css'
import { Avatar , IconButton} from '@mui/material'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined ,} from '@mui/icons-material'
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
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
          <SearchOutlined/>
        </IconButton>
        <IconButton>
          <AttachFile/>
        </IconButton>
        <IconButton>
          <MoreVert/>
        </IconButton>
        </div>
      </div>

      <div className='chatBody'>
    <ChatBody/>
    <ChatBody/>
    <ChatBody/>
    <ChatBody/>
    <ChatBodyrecei/>
    <ChatBody/>  
    <ChatBody/> 
    <ChatBody/> 
    </div>

    <div className='chat_footer'>
      <InsertEmoticon/>
      <form>
        <input type='text' placeholder='Type a message..'/>
        <button type='submit'>
          Send A Message
        </button>
      </form>
      <MicIcon/>
    </div>
    </div>
  )
}

function ChatBody(){
  return( 
  <p className='chat_msg'>
    <span className='chat_name'> Jatin</span>
    This is a msg 
    <span className='timestamp'> {new Date().toUTCString()}</span>
  </p>
)
}

function ChatBodyrecei(){
  return(
  <p className='chat_msg chat_receiver'>
    <span className='chat_name'> Jatin</span>
    This is a msg 
    <span className='timestamp'> {new Date().toUTCString()}</span>
  </p>
)
}

export default Chat