import React from 'react'
import './sidebarChat.css'
import { Avatar } from '@mui/material'

function SidebarChat() {
  return (
    <div className='sidebarChat'>
    <Avatar/>
    <div className='sidebarChat__info'>
      <h2>Room Name</h2>
      <p>This is last msg </p>
    </div>
    </div>
  )
}

export default SidebarChat 