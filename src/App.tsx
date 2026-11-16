import './App.css'
import Bufferline from './assets/Bufferline.tsx'
import Sidebar from './assets/Sidebar.tsx'
import Viewport from './assets/Viewport.tsx'
import Lualine from './assets/Lualine.tsx'
import { useState } from 'react'

function App() {
  const [openBufferIds, setOpenBufferIds] = useState<string[]>([]);
  const [activeBufferId, setActiveBufferId] = useState<string | null>(null);

  const openBuffer = (id: string) => {
    setOpenBufferIds((prevIds) => prevIds.includes(id) ? prevIds : [...prevIds, id])
    setActiveBufferId(id);
  };

  const closeBuffer = (id: string) => {
    setOpenBufferIds((prevIds) => prevIds.filter((tabId) => tabId !== id))
    if (activeBufferId === id) {
        const remainingIds = openBufferIds.filter((tabId) => tabId !== id);
      if (remainingIds.length > 0) {
      setActiveBufferId(remainingIds[remainingIds.length -1]);
      } else {
        setActiveBufferId(null);
      }
    }
  }

  return (
    <div id="workspace">
      <div id="mainContent">
        {/* Neo-Tree sidebar */}
        <Sidebar />
        <div id="workspaceView">
          {/* Bufferline */}
          <Bufferline />
          {/* Workspace Viewport*/}
          <Viewport />
        </div>
      </div>
      
      {/* Lualine */}
      <Lualine />
    </div>
  )
}

export default App
