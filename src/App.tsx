import './App.css'
import React from 'react'
import Bufferline from './assets/Bufferline.tsx'
import Sidebar from './assets/Sidebar.tsx'
import Viewport from './assets/Viewport.tsx'
import Lualine from './assets/Lualine.tsx'

function App() {
  return (
    <div id="workspace">
      {/* Neo-Tree sidebar */}
      <Sidebar />
      
      <div>
        {/* Bufferline */}
        <Bufferline />
      </div>
      <div>
        {/* Workspace Viewport*/}
        <Viewport />
      </div>
      
      {/* Lualine */}
      <Lualine />
    </div>
  )
}

export default App
