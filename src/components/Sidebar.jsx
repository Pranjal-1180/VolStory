import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import * as IoIcons from 'react-icons/io';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/settings",
            name:"Settings",
            icon:<IoIcons.IoIosSettings/>
        },
        {
            path:"/about",
            name:"AppInfo",
            icon:<IoIcons.IoMdInformationCircle/>
        },
        {
            path:"/faq",
            name:"FAQ",
            icon:<IoIcons.IoMdHelpCircle />
        },
        {
            path:"/TandP",
            name:"Terms and Privacy",
            icon:<IoIcons.IoMdDocument />
        },
        {
            path:"/invite",
            name:"Invite Friends",
            icon:<IoIcons.IoMdMail />
        },
        {
            path:"/signout",
            name:"Sign Out",
            icon:<IoIcons.IoIosPower />
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "280px" : "70px"}} className="sidebar">
               <div className="top_section">
                   
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;