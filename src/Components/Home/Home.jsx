import React from 'react'
import picture from "../../assets/home-picture.png"
import "./Home.css"
import { FaLock } from "react-icons/fa";

const Home = () => {
  return (
    <div className='home'>
        <div className='promotional-box'>
          <img className="promotional-picture" src={picture} alt="A laptop with the whatsapp logo" />
          <div className='promotional-content'>
            <h3 className='big-font'>Download WhatsApp for Windows</h3>
            <span className='medium-gray-font'>Make calls, share your screen and get a faster experience when you download the Windows app</span>
          </div>
          <a href=""><span className='green-button'>Get from Microsoft Store</span></a>
        </div>
        <div className='bottom-info'>
          <FaLock />
          <span>Your personal messages are end-to-end encrypted</span>
        </div>
    </div>
  )
}

export default Home