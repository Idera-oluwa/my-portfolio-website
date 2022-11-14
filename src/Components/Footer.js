import React from 'react'
import './Footer.css'
import {FiFacebook,FiTwitter,FiLinkedin} from 'react-icons/fi';

const Footer = () => {
    return (
        <div>
        <div className='footer-container'>
            <div className='footer-image-card-container'>
            <div className='image-container-div footer-icd'>
                <img src='Images/Idera.png' alt='' className='nav-image'/>
                <h3>DERAH</h3>
            </div>
            <div className='hero-cards footer-cards'>
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
            <div className='grid'>
                <h3 className='footer-item-heading'>QUICK LINK</h3>
                <p className='footer-item-text'>About</p>
                <p className='footer-item-text'>Portfolio</p>
                <p className='footer-item-text'>Services</p>
                <p className='footer-item-text'>Blog</p>
                <p className='footer-item-text'>Contact</p>
            </div>
            <div className='grid'>
                <h3 className='footer-item-heading'>RESOURCES</h3>
                <p className='footer-item-text'>Authentication</p>
                <p className='footer-item-text'>System Status</p>
                <p className='footer-item-text'>Terms of Service</p>
                <p className='footer-item-text'>Pricing</p>
                <p className='footer-item-text'>Over Right</p>
            </div>
            <div className='grid'>
                <h3 className='footer-item-heading'>DEVELOPERS</h3>
                <p className='footer-item-text'>Documentation</p>
                <p className='footer-item-text'>Authentication</p>
                <p className='footer-item-text'>API Reference</p>
                <p className='footer-item-text'>Support</p>
                <p className='footer-item-text'>Open source</p>
            </div>
        </div>
        <p className='footer-text'>© {new Date().getFullYear()}  All rights reserved</p>
        </div>
    )
}

export default Footer
