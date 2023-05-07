import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Settings from './pages/Settings.jsx';
import AppInfo from './pages/AppInfo.jsx';
import FAQ from './pages/FAQ.jsx';
import TandP from './pages/TandP.jsx';
import Invite from './pages/Invite.jsx';
import Signout from './pages/Signout.jsx';
 import Navbar from './components/Navbar';


import Home from './pages/Home.js';
import Mystory from './pages/Mystory.js';
import Notification from './pages/Notification.js';
import Profile from './pages/Profile.js';


const App = () => {
  return (
    <BrowserRouter>
    <Topbar/>
    
     <div className="container">
    <Routes>
    <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/mystory" element={<Mystory />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
    </Routes>
     </div> 
     
     <Sidebar>
      <Routes>
     
      
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<AppInfo />} />
        <Route path="/TandP" element={<TandP />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/signout" element={<Signout />} />
        
      </Routes>
     
      </Sidebar>  
    </BrowserRouter>

    
  );
};

export default App;