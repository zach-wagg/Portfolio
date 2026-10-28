import './App.css'
import React from 'react'
import Bufferline from './assets/Bufferline.tsx'
import Sidebar from './assets/Sidebar.tsx'
import Viewport from './assets/Viewport.tsx'
import Lualine from './assets/Lualine.tsx'

function App() {
  return (
    <div id="workspace">
      {/* Bufferline */}
      <Bufferline />

      {/* Neo-Tree sidebar */}
      <aside id="sidebar">
        <Sidebar />
      </aside>
      
      {/* Workspace Viewport*/}
      <Viewport />

      {/* Lualine */}
      <Lualine />
    </div>
  )
}

export default App
