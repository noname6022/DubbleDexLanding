import React, {useState} from 'react';

import './index.css'

import Header from './Components/Header';


function App() {
  
  function refreshPage(){ 
    window.location.reload(); 
}

return (
 

    <div className='App'>
      <Header/>
      <div className='MainBackground'></div>
          <div className='HeaderContainer'>
    <div>
    <Link to="/" className='LogoLink'> <img  className="LogoStyles" alt='Logo' src={Logo}/></Link>

</div>
<div>
<a className='HeaderLinkStyle' href='https://www.dubbledex.com' target="_blank"><img className="DocsIconStyle"  src={DocsIcon} alt='DocsIcon'/><span className='SpanLink '>Docs</span></a>
</div>
<div className='ButtonAndLinkDiv'>
<Link to="/Tokenomics" className='HeaderLinkTokenomicStyle'><img className="TokenomicIconStyle" src={TokenomicIcon} alt='TokenomicIcon'/><span className='SpanLink'>Tokenomic</span></Link>
</div>
<div className='ButtonAndLinkDiv'>
<Link role="link" aria-disabled="true" className='HeaderLinkLaunchPadStyle DisabledLink'><img className="LaunchpadIconStyle DisabledIcon" src={LaunchPadIcon} alt='LaunchpadIcon'/><span className='SpanLink DisabledSpan'>Coming Soon</span></Link>
</div>
</div>



    </div>   

  );
}

export default App;
