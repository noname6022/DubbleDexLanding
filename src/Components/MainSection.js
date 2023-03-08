import React from 'react';

import "../styles/MainStyles.css"
import TokenPot from "../Media/TokenPot.png"
import TokenBall from "../Media/TokenBall.png"
import DubbleDexIcon from '../Media/DubbleDexTokenIcon.png'
import SocialBlock from './SocialBlock'
import Torus from '../Media/Torus.png'
import Wave from '../Media/Wave.png'

export const MainSection = () => {


  return (
    <section>
        <div className='MainContainer'>
                <div >
                    <img src={Torus} alt="Torus" className='Torus'/>
                </div>

            <div className='MainTitleContainer'>
                <h1>
                The Liquidity and Stable Yield<br/>
                Flywheel on Arbitrum
                </h1>
            </div>
            <div className="MainParagraphSection">
                <p>
                Earn smooth $DUBBL rewards and take<br/>
                control of your finances with Dubble<br/>
                DEX's discounted trading fees and<br/>
                revenue distribution model, <b>all powered<br/>
                by the $DUB stablecoin for maximum<br/>
                yield
                </b></p>
            </div>
            <div>

            </div>
            <div>
                    <img src={Wave} alt="Wave" className='Wave'/>
                </div>
<div className='InfoBlocksWrapper'>
{/*1*/}
            <div className='InfoBlocks'>
                <div className='InfoBlocksContainer'>
                    <div className='InfoBlockFirstImage'>
                        <img src={TokenPot} className="PotImage"/>
                    </div>
                    <div  className='InfoText'>
                    <h3>An opportunity for unique yield<br/>
                     farming</h3>
                     <p>
                     Experience a multitude of income streams as a<br/>
                    liquidity provider or veDUBBL holder and earn<br/>
                    more on Dubble than any other platform on<br/>
                    Arbitrum
                     </p>
                     </div>
                </div>
            </div>
{/*2*/}
            <div className='InfoBlocks'>
                <div className='InfoBlocksContainer'>
                    <div className='InfoBlockFirstImage SecondInfoBlockImage'>
                        <img src={TokenBall} className="BallImage"/>
                    </div>
                    <div  className='InfoText'>
                    <h3>The incentives are transparent<br/>
                    and clear for all users</h3>
                     <p>
                     Our tokenomics and incentives are designed<br/> 
                     to create long-term value. This ensures that<br/>
                     our liquidity pools are always abundant<br/>
                        
                     </p>
                     </div>
                </div>
            </div>
{/*3*/}

            <div className='InfoBlocks'>
                <div className='InfoBlocksContainer'>
                    <div className='InfoBlockFirstImage ThirdInfoBlockImage'>
                        <img src={DubbleDexIcon} className="DexIcon"/>
                    </div>
                    <div className='InfoText'>
                    <h3 >Our tokenomics deeply embed<br/>
                     liquidity for governance</h3>
                     <p>
                     Dubble's governance power is based on<br/>
                      locked DUBBL-DUB LP tokens, providing<br/>
                       deep liquidity for trading and price<br/>
                        stability, unlike other ve(3,3) DEXes
                     </p>
                     </div>
                </div>
            </div>
</div>
    <div className='MainSocialWrapper'>
        <SocialBlock/>
    </div>
        </div>
    </section>
  )
}
export default MainSection