/* eslint-disable no-unused-vars */
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
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Lorem.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem, ipsum dolor.</li>
        <p className='copyright-text'>© Netflix-Clone, Inc </p>
      </ul>
    </div>
  )
}

export default Footer
