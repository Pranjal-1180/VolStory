
// import React from 'react'
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// //import Teams from './pages/Teams.js';
// function Topbar() {
//   return (
//     <div className="topbar">
     
//       <ul>
//         <li>
//           <Link to="/teams">Teams</Link>
//         </li>
//          {/* <li>
//           <Link to="/about">About</Link>
//         </li> */}
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li> 
//       </ul>
//     </div>
   
//   )
// }
// export default Topbar

import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        VolStory
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/mystory">My Story</CustomLink>
        <CustomLink to="/notification">Notification</CustomLink>
        <CustomLink to="/profile">Profile</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
