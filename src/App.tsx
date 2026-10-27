import './App.css'
import './assets/*'
import React from 'react'

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
