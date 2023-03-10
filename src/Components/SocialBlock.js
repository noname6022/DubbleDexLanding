import React from 'react'
import DiscordIcon from "../Media/Social/DiscordIcon.svg"
import TwitterIcon from "../Media/Social/TwitterIcon.svg"
import MediumIcon from "../Media/Social/MediumIcon.svg"
import "../styles/SocialBlockStyle.css"

export const SocialBlock = () => {
  return (
    <div className='SocialContainer'>
        <a href='https://www.discord.com/invite/3Y8X2JTdGh' target="_blank"><img className='DiscordIcon' src={DiscordIcon}/></a>
        <a href='https://www.twitter.com/DEX_Dubble' target="_blank"><img className='TwitterIcon' src={TwitterIcon}/></a>
        <a href='https://www.medium.com/@dubbledex' target="_blank"><img className='MediumIcon' src={MediumIcon}/></a>
    </div>
  )
}
export default SocialBlock
