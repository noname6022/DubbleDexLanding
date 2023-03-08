import React from 'react'
import "../../styles/LaunchpadStyles.css";

export const SaleStarted = () => {
  return (
    <div>
        <div className="SaleStartedBlock">
            <div className='SaleStartedInfo'>
                <h2>How to participate:</h2>
                <ul>
                <li>Bridge assets to the Arbitrum chain</li>
                <li>Prepare USDC as a deposit asset</li>
                <li>Commit your deposit</li>
                <li>Claim your first allocation</li>
                <li>Claim the rest of your allocation<br/>
                 based on the vesting conditions</li>
                </ul>
                </div>
                <button className='SaleStartedBtn'>Join Sale</button>
            </div>
    </div>
  )
}
export default SaleStarted;
