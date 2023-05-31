import React, { useState } from 'react'
import './Sidebar.css';
import { HiOutlineHome } from 'react-icons/hi'
import { BsWind } from 'react-icons/bs'
import { RiGasStationFill } from 'react-icons/ri'
import { FaBars } from 'react-icons/fa'
import { SlSpeedometer } from 'react-icons/sl'
import { NavLink } from 'react-router-dom'
import { RiTempColdLine } from 'react-icons/ri'

const Sidebar = ({children}) => {
  const[isOpen ,setIsOpen] = useState(true);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[

    {
      path:"/",
      name:"Home",
      icon:<HiOutlineHome/>
    },
    {
      path:"/exhaust",
      name:"Exhaust",
      icon:<BsWind/>
    },
    {
      path:"/fuel",
      name:"Fuel",
      icon: <RiGasStationFill/>
    },
    {
      path:"/cooling",
      name:"Cooling",
      icon:<RiTempColdLine/>
    },
    {
    path:"/rpm",
    name:"Rpm",
    icon:<SlSpeedometer/>
    },
    {
      path:'/all',
      name:'View all',
      icon:<RiTempColdLine />
    }
    
  ]
  return (
    <div className='containers'>
      <div style={{width : isOpen ? "200px" : "50px"}} className="sidebar">
        <div className="top_section">
          <h6 style={{display : isOpen ? "block" : "none"}} className="logo">Digital Twin</h6>
          <div style={{marginLeft : isOpen ? "50px" : "0px"}} className="bars">
            <FaBars onClick={toggle}/>
          </div>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassname="active">
              <div className="icon">{item.icon}</div>
              <div style={{display : isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main className='main_container'>{children}</main>
    </div>
  )
}

export default Sidebar;