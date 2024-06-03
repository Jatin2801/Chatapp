import React from 'react'
import "./sidebar.css"
import DonutLargeIcon from '@mui/icons-material/DonutLarge'; // imported with material ui 
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <Avatar src='https://avatarfiles.alphacoders.com/366/366524.png'/>
        <div className='sidebar_headerRight'>
          <IconButton><DonutLargeIcon /></IconButton>{/* IconButton is func. of mate. UI whhich makes icon clickable  */}
          <IconButton><ChatIcon /></IconButton>
          <IconButton><MoreVertIcon /></IconButton>
        </div>
      </div>
      <div className='sidebar_seach'>
        <div className='sidebar_searchContainer '>
      <SearchOutlined/>
      <input type='text' placeholder='Search or Start new chat'/>
        </div>
      </div>
      <div className='sidebar_chats'>
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>

      </div>
    </div>
  )
}

export default Sidebar