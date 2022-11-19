import React from 'react'
import './Hero.css'
import {FiFacebook,FiTwitter,FiLinkedin, FiDownload} from 'react-icons/fi';
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
                   <h3 className='hero-cards-text'>DOWNLOAD RESUME</h3>
                   <a href='Files/Isa Zainab Resume.pdf' download><button className='download-resume'>DOWNLOAD <FiDownload/></button></a>
                   </div>
               <div className='hero-cards-container'>
                   <h3  className='hero-cards-text'>BEST SKILL ON</h3>
                   <div className='hero-cards'>
                  <a href='https://www.linkedin.com/in/zainab-isa-a33066211' target="_blank" rel="noreferrer"> <div className='hero-card'>
                   <FaLinkedinIn className='hero-card-icon pink-icon' />
                   </div></a>
                   <a href='https://github.com/Idera-oluwa' target="_blank" rel="noreferrer"> <div className='hero-card'>
                   <FaGithub className='hero-card-icon' />
                   </div></a>
                   <a href='https://styleyteam.slack.com/team/U03RKB8FBDG'
                   target="_blank" rel="noreferrer"
                   ><div className='hero-card'>
                   <img src='Images/Slack logo.png' alt='' className='hero-card-img'/>
                   </div></a>
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
