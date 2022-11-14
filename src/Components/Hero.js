import React from 'react'
import './Hero.css'
import {FiFacebook,FiTwitter,FiLinkedin} from 'react-icons/fi';
import {FaLinkedinIn,FaGithub} from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='hero-container' id='home'>
            <div className='hero-text-container'>
                <p className='hero-intro-text'>WELCOME TO MY WORLD</p>
                <h1 className='hero-header'>Hi, I'm <span className='hero-span'>Isa Zainab</span></h1>
                <h1 className='hero-header-2'><span className='hero-span-2'>a </span> Developer.<span className='hero-span'>|</span></h1>
            <p className='hero-text'>A highly skilled and motivated web developer who delivers the best quality and scalable software for your business. 
            Passionate about going the extra mile to ensure the customer is unquestionably satisfied with the service provided.</p>
           <div className='hero-cards-total-container'>
               <div className='hero-cards-container'>
                   <h3 className='hero-cards-text'>FIND ME ON</h3>
                   <div className='hero-cards'>
                     <div className='hero-card'>
                     <FiFacebook className='hero-card-icon'/>
                     </div>
                     <div className='hero-card'>
                     <FiTwitter className='hero-card-icon'/>
                     </div>
                     <div className='hero-card'>
                     <FiLinkedin className='hero-card-icon'/>
                     </div>
                   </div>
               </div>
               <div className='hero-cards-container'>
                   <h3  className='hero-cards-text'>BEST SKILL ON</h3>
                   <div className='hero-cards'>
                   <div className='hero-card'>
                   <FaLinkedinIn className='hero-card-icon pink-icon' />
                   </div>
                   <div className='hero-card'>
                   <FaGithub className='hero-card-icon' />
                   </div>
                   <div className='hero-card'>
                   <img src='Images/Slack logo.png' alt='' className='hero-card-img'/>
                   </div>
                   </div>
               </div>
           </div>
            </div>
            <div className='hero-image-container'>
                <div className='hero-image-div'></div>
                <img src='Images/Zainab.png' alt='' className='hero-image'/>
            </div>
        </div>
    )
}

export default Hero
