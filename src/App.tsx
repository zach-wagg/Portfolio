import './App.css'
import Bufferline from './assets/Bufferline.tsx'
import Sidebar from './assets/Sidebar.tsx'
import Viewport from './assets/Viewport.tsx'
import Lualine from './assets/Lualine.tsx'

function App() {
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
