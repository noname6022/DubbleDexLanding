import React, {useState} from 'react';
import MainSection from './Components/MainSection';
import './index.css'
import Launchpad  from './Components/Launchpad';
import Tokenomics from './Components/Tokenomics';
import Logo from "./Media/Logo.svg"
import DocsIcon from './Media/DocsIcon.svg'
import TokenomicIcon from './Media/TokenomicIcon.svg'
import LaunchPadIcon from './Media/LaunchPadIcon.svg'
import "./styles/HeaderStyles.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  
  function refreshPage(){ 
    window.location.reload(); 
}

return (
 

    <div className='App'>
      <div className='MainBackground'></div>
          <div className='HeaderContainer'>
    <div>
    <Link to="/" className='LogoLink'> <img  className="LogoStyles" alt='Logo' src={Logo}/></Link>

</div>
<div>
<a className='HeaderLinkStyle' href='https://dubble-dex.gitbook.io/docs/' target="_blank"><img className="DocsIconStyle"  src={DocsIcon} alt='DocsIcon'/><span className='SpanLink '>Docs</span></a>
</div>
<div className='ButtonAndLinkDiv'>
<Link to="/Tokenomics" className='HeaderLinkTokenomicStyle'><img className="TokenomicIconStyle" src={TokenomicIcon} alt='TokenomicIcon'/><span className='SpanLink'>Tokenomic</span></Link>
</div>
<div className='ButtonAndLinkDiv'>
<Link role="link" aria-disabled="true" className='HeaderLinkLaunchPadStyle DisabledLink'><img className="LaunchpadIconStyle DisabledIcon" src={LaunchPadIcon} alt='LaunchpadIcon'/><span className='SpanLink DisabledSpan'>Coming Soon</span></Link>
</div>
</div>


       
       <Routes>
              <Route exact  path="/" element={<MainSection/>} />
        <Route  path="/Launchpad" element={<Launchpad/>} />
        <Route  path="/Tokenomics" element={<Tokenomics/>} />
</Routes>
    </div>   

  );
}

export default App;
