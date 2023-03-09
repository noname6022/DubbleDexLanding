import React from 'react'
import MainSection from '../Components/MainSection';
import Launchpad  from '../Components/Launchpad';
import Tokenomics from '../Components/Tokenomics';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export const RoutesMap = () => {
  return (
           
    <Routes>
    <Route exact  path="/" element={<MainSection/>} />
<Route  path="/Launchpad" element={<Launchpad/>} />
<Route  path="/Tokenomics" element={<Tokenomics/>} />
</Routes>
  )
}
export default RoutesMap
