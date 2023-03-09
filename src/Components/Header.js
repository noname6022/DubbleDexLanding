import React, { useState, useLayoutEffect } from 'react'
import Logo from "../Media/Logo.svg"
import DocsIcon from '../Media/DocsIcon.svg'
import TokenomicIcon from '../Media/TokenomicIcon.svg'
import LaunchPadIcon from '../Media/LaunchPadIcon.svg'
import HomeIcon from '../Media/HomeIcon.svg';
import "../styles/HeaderStyles.css"
import RoutesMap from './Routes'
import BurgerMenuIcon  from '../Media/burgerBtn.svg';
import BurgerCloseIcon from '../Media/CloseBurgerBtn.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MediaQuery from 'react-responsive'


export const Header = () => { 
    const [showBurger, setShowBurger] = useState(false);
    
    const toggleMenu = () => {
        setShowBurger(!showBurger);
        
      };

      useLayoutEffect(() => {
        if (showBurger) {
          document.body.classList.add('no-scroll');
          window.scrollTo(0, 0);
        } else {
          document.body.classList.remove('no-scroll');
        }
      }, [showBurger]);

  return (
   
    <>
<div className='HeaderContainer'>
    <div>
    <Link to="/" className='LogoLink'> <img  className="LogoStyles" alt='Logo' src={Logo}/></Link>

</div>
<div className='HeaderLinksWrapper'>
<div >
<a className='HeaderLinkStyle' href='https://dubble-dex.gitbook.io/docs/' target="_blank"><img className="DocsIconStyle"  src={DocsIcon} alt='DocsIcon'/><span className='SpanLink '>Docs</span></a>
</div>
<div className='ButtonAndLinkDiv'>
<Link to="/Tokenomics" className='HeaderLinkTokenomicStyle'><img className="TokenomicIconStyle" src={TokenomicIcon} alt='TokenomicIcon'/><span className='SpanLink'>Tokenomic</span></Link>
</div>
<div className='ButtonAndLinkDiv'>
<Link role="link" aria-disabled="true" className='HeaderLinkLaunchPadStyle DisabledLink'><img className="LaunchpadIconStyle DisabledIcon" src={LaunchPadIcon} alt='LaunchpadIcon'/><span className='SpanLink DisabledSpan'>Coming Soon</span></Link>
</div>
</div>
</div>
<MediaQuery maxWidth={600}>
<div className='MobileHeader'>
    <button onClick={toggleMenu} className='buttonZero'>
        <img  src={BurgerMenuIcon} className='MobileHeaderBurgerBtn'/>
</button>
</div>
{showBurger && (
    
<div className='BurgerMenuBlock'>
<div className='MobileHeader'>
<button  className='buttonZero' onClick={toggleMenu}>
        <img  src={BurgerCloseIcon} className='MobileHeaderBurgerBtn'/>
</button>
</div>
    <div className='BurgerMenuLogo'>
    <Link onClick={toggleMenu} to="/" className='LogoLink'> <img  className="LogoStyles" alt='Logo' src={Logo}/></Link>
    </div>

    <div className='BurgerMenuItems'>

    <div className='ButtonAndLinkDiv'>
<Link to="/" onClick={toggleMenu} className='HeaderLinkStyle'><img className="HomeIcon" src={HomeIcon} alt='HomeIcon'/><span className='SpanLink'>Home</span></Link>
</div>
<div  className='ButtonAndLinkDiv'>
<a  href='https://dubble-dex.gitbook.io/docs/' target="_blank" className='HeaderLinkStyle' ><img className="DocsIconStyle"  src={DocsIcon} alt='DocsIcon'/><span className='SpanLink '>Docs</span></a>
</div>
<div className='ButtonAndLinkDiv'>
<Link to="/Tokenomics" onClick={toggleMenu}  className='HeaderLinkStyle' ><img className="TokenomicIconStyle" src={TokenomicIcon} alt='TokenomicIcon'/><span className='SpanLink'>Tokenomic</span></Link>
</div>
<div  className='ButtonAndLinkDiv'>
<Link role="link" aria-disabled="true"onClick={toggleMenu} className='HeaderLinkStyle DisabledLink'   ><img className="LaunchpadIconStyle DisabledIcon" src={LaunchPadIcon} alt='LaunchpadIcon'/><span className='SpanLink DisabledSpan'>Coming Soon</span></Link>
</div>

</div>


</div>
      )}
</MediaQuery>

<RoutesMap/>
    </>
  )
}
export default Header
