import logo from './logo.svg';
import './App.css';


import { useState } from 'react'
import './component/Dashboard.css'
import Sidebar from './component/Sidebar'
import Home from './component/Home'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      
      
      <Home />
    </div>
  )
}

export default App
