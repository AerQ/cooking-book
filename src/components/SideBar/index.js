import React from 'react';
import './SideBar.css';

const menuItems = [
  'Item-1',
  'Item-2',
  'Item-3'
]

const SideBar = () => (
    <div className='side-bar_container'>
      <h3>Menu</h3>
      <ul className='side-bar_menu-list'>
        {menuItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
)

  
    
 

export default SideBar;
