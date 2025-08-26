import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Hlp Center</li>
        <li>Gift cards</li>
        <li>Media Center</li>
        <li>Invester Relations</li>
        <li>jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>cookie Preferences</li>
        <li>corporate information</li>
        <li>Contact us</li>
      </ul>
      <p className='copyright-text'> ©1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
