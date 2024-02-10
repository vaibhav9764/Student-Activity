import React, { useState } from 'react';
import { BsFillArchiveFill } from 'react-icons/bs';
import Header from './Home'; // Import Header component

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [showHeader, setShowHeader] = useState(false); // State variable to control Header visibility

  // Function to handle click event for Permission item
  const handlePermissionClick = () => {
    setShowHeader(true); // Set showHeader to true when Permission is clicked
  };

  return (
    <ul className='sidebar-list'>
      <li className='sidebar-list-item'>
        <a href="">
          <BsFillArchiveFill className='icon' /> Items Required
        </a>
      </li>
      <li className='sidebar-list-item'>
        <a href="#" onClick={handlePermissionClick}>
          <BsFillArchiveFill className='icon'/> Permission
        </a>
      </li>
      <li className='sidebar-list-item'>
        <a href="">
          <BsFillArchiveFill className='icon' /> Approval Status
        </a>
      </li>

      {/* Conditionally render Header component */}
      {showHeader && <Header />}
    </ul>
  );
}

export default Sidebar;
