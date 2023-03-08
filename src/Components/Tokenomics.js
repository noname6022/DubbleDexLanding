import React from 'react'
import SocialBlock from './SocialBlock'
import "../styles/TokenomicsStyles.css"
import OilSquare from '../Media/Squares/OilSquare.png';
import lightblueSquare from '../Media/Squares/lightBlueSquare.png';
import PinkSquare from '../Media/Squares/PinkSquare.png';
import BlueSquare from '../Media/Squares/BlueSquare.png';
import GreenSquare from '../Media/Squares/GreenSquare.png';
import DubbleChart from '../Media/DubbleTokenChart.svg';
import HomeIcon from '../Media/HomeIcon.svg';
import FeesFirstChart from '../Media/FeesFirstChart.png';
import FeesSecondChart from '../Media/FeesSecondChart.png';
import DistributionFirstDiagram from '../Media/DistributionFirstDiagram.png';
import DistributionSecondDiagram from '../Media/DistributionSecondDiagram.png';
import DistributionThirdDiagram from '../Media/DistributionThirdDiagram.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export const Tokenomics = () => {
  return (
  <>
    <Link to="/" className='HeaderLinkStyle HomeLinkBtn'> <img className="HomeIcon" src={HomeIcon} alt="home"/><span>Home</span></Link>
    <section className='TokenomicsWrapper AppearingAnimation'>
       
      <div className='FirstZoneLineContainer'>
        <div className='FirstZoneFirstBlock'>
          <div className='FirstZoneFirstBlockTitle'>
          <h1>Dubble DEX<br/>
         tokenomics</h1>
         </div>
         <div className='FirstZoneFirstBlockText'>
          <p>
          Dubble Dex is almost ready for its official launch! We are now at<br/>
           a stage where we can release the official tokenomics in a<br/>
            simplified list format. For a more detailed explanation of these<br/>
             numbers, please refer to the Dubble Dex <a href='https://www.dubbledex.com' target="_blank">documentation.</a>
          </p>
          <img src={OilSquare} alt="square"  className="OilSquare"/>
          <img src={lightblueSquare}  alt="square" className="lightblueSquare"/>
          <img src={PinkSquare}  alt="square"  className="PinkSquare"/>
         </div>
         <a className='FirstZoneFirstBlockBtn' href='https://www.dubbledex.com' target="_blank">Learn More</a>
         </div>
         <div className='FirstZoneSecondBlock'>
          <div className='FirstZoneSecondBlockTitle'><h1>Dubble Token</h1></div>
          <div className='FirstZoneSecondBlockSupply'><h2>MAX SUPPLY</h2></div>
          <div className='FirstZoneSecondBlockNumber'><h3>23 000 000 000</h3></div>
          <div className='FirstZoneSecondBlockList'>
            <ul>
              <li>
                <div className='liContainer'>
                <span className='FirstLiText'>Pre-sale</span>
                <span className='SecondLiText'>12%</span>
                </div>
                </li>
              <li>
                <div className='liContainer'>
                <span className='FirstLiText'>Protocol Fee ( linearly vested over 1 year)</span>
                <span className='SecondLiText'>20%</span>
                </div>
                </li>
              <li>
                <div className='liContainer'>
                <span className='FirstLiText'>Community (LP Emissions)</span>
                <span className='SecondLiText'>68%</span>
                </div>
                </li>
            </ul>
          </div>
          <div className="DubbleChartWrapper">
            <img className="DubbleChart" src={DubbleChart} alt="DubbleChart"/>

            </div>
          </div>
        </div>

        <div className='SecondZoneLineWrapper'>
          <div className='SecondZoneLineContainer'>
          <div className='SecondZoneFirstBlock'>
            <div>
              <h2 className='DubbleDexTreasuryTitle'>Dubble DEX<br/>
             Treasury</h2> 
             
             </div>
             <hr/>
             
             <div><h3 className='InvestmentTreasuryTitle'>Investment Treasury </h3></div>
             <div><p className='InvestmentTreasuryParagraph'>The treasury where all $DUB collateral is held.<br/>
              The more that is contributed to this treasury,<br/>
               the higher the $DUB yield is for all $DUB<br/>
                holders and the more “insurance” is in place<br/>
                 should an unforeseen event occur</p></div>
            </div>

          <div className='SecondZoneSecondBlock'>
          <div>
            <h3 className='SustainmentTreasuryTitle'>Sustainment Treasury</h3>
             </div>
             <div><p className='SustainmentTreasuryParagraph'>Fund aimed at enhancing the value and<br/>
              functionality of $DUB and $DUBBL.<br/>
               Further information on this treasury can<br/>
                be found at the specified location</p></div>
          </div>
          </div>

            <div className='SecondZoneThirdBlock'>
              <div>
                <h2>Dubble DEX fees</h2> 
              </div>
                  <hr/>

                  <div className='FeeWrapper'>

                <div className='FeeContainer'>

                  <div>
                    <h3>Dubble Stable swap </h3></div>
                  <div><h4>Trading fee</h4></div>
                  <div className='FeeCharts'><img src={FeesFirstChart}/></div>
                  <div className='FeeInfoContainer'>
                    <div className='SpanFeeBlock'><span>Fee</span> <span>0.01%</span></div>
                    <hr/>
                    <div className='SpanFeeBlock'><span >Fee if LP contains</span></div>
                    <div className='SpanFeeBlock'><span>$DUB token</span><span>0.0075%</span></div>
                  </div>

                </div>

                <div className='FeeContainer SecondFeeContainer'>

                          <div>
                           <h3>Dubble Volatile swap</h3></div>
                          <div><h4>Trading fee</h4></div>
                          <div className='FeeCharts SecondFeeCharts'><img src={FeesSecondChart}/></div>
                          <div className='FeeInfoContainer SecondFeeInfoContainer'>
                            <div className='SpanFeeBlock'><span>Fee</span> <span>0.02%</span></div>
                            <hr/>
                            <div className='SpanFeeBlock'><span >Fee if LP contains</span></div>
                            <div className='SpanFeeBlock'><span>$DUB token</span><span>0.05%</span></div>
                          </div>
                </div>  
          </div> 
      </div>
      </div> 
      
      
      
      <div className='FeeDistributionBlock'>
          <div>
            <h2>TRADING FEE DISTRIBUTION</h2>
            <hr/>
          </div>
          <div  className='DistributionDiagramBlocks'>

            <div  className='DistributionDiagramBlock'>
              <div className='DistributionFirstTitle'>
                <h3>$DUB Rebase Distribution<br/>
                  in Dubble LPs:</h3>
               </div>
               <div className='DistributionDiagramBlockImage'><img src={DistributionFirstDiagram} alt="DistributionFirstDiagram"/></div>
               <div className="DistributionFirstDiagramText">
                <p>65% to liquidity providers as claimable rewards</p>
                <p>25% auto bribes to the pair</p>
                <p>5% to $DUB Investment Treasury</p>
                <p>5% to Sustainment Treasury</p>
               </div>
            </div>
            <div  className='DistributionDiagramBlock'>
              <div className='DistributionSecondTitle'><h3>Partner Pools</h3></div>
               <div className='DistributionDiagramBlockImage SecondDiagram'><img src={DistributionSecondDiagram} alt="DistributionFirstDiagram"/></div>
               <div className="DistributionSecondDiagramText">
                <p>65% to veDUBBL holders who voted for the pool</p>
                <p>25% to partner treasury</p>
                <p>10% to $DUB Investment Treasury</p>
               </div>
            </div>
            <div  className='DistributionDiagramBlock'>
              <div><h3>Main Pools</h3></div>
               <div className='DistributionDiagramBlockImage'><img src={DistributionThirdDiagram} alt="DistributionFirstDiagram"/></div>
               <div className="DistributionThirdDiagramText">
                <p>90% to veDUBBL holders who voted for pool </p>
                <p>10% to $DUB Investment Treasury</p>
               </div>
            </div>
          </div> 
          <img src={BlueSquare} alt="square"  className="BlueSquare"/>
          <img src={GreenSquare}  alt="square" className="GreenSquare"/>

      </div>

      <div className='TokenomicSocialBlock'>
        <SocialBlock/>
      </div>

      <div className='CopyrightBlock'>
        <h5>Copyright © 2023 Dubble DEX</h5>
      </div>

    </section>
    </>
  )
}
export default Tokenomics
