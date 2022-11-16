import React from 'react'
import './Footer.css'
import {FiFacebook,FiLinkedin} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import {Link} from 'react-scroll'

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
            <a href='https://www.facebook.com/ideraoluwa.isa.1' target="_blank" rel="noreferrer"><div className='hero-card'>
                     <FiFacebook className='hero-card-icon'/>
                     </div></a>
                     <a href='https://wa.me/2349156536793' target="_blank" rel="noreferrer"><div className='hero-card'>
                     <FaWhatsapp className='hero-card-icon'/>
                     </div></a>
                     <a href='https://www.linkedin.com/in/zainab-isa-a33066211' target="_blank" rel="noreferrer"> <div className='hero-card'>
                     <FiLinkedin className='hero-card-icon'/>
                     </div></a>
                   </div>
            </div>
            <div className='grid'>
                <h3 className='footer-item-heading'>QUICK LINK</h3>
                <p className='footer-item-text'><Link  to="home" spy={true} smooth={true}>About</Link></p>
                <p className='footer-item-text'><Link  to="portfolio" spy={true} smooth={true}>Portfolio</Link></p>
                <p className='footer-item-text'><Link  to="features" spy={true} smooth={true}>Services</Link></p>
                <p className='footer-item-text'><Link  to="contacts" spy={true} smooth={true}>Contact</Link></p>
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
                <p className='footer-item-text'><a href='https://github.com/Idera-oluwa/my-portfolio-website'>Documentation</a></p>
                <p className='footer-item-text'>Authentication</p>
                <p className='footer-item-text'>API Reference</p>
                <p className='footer-item-text'>Support</p>
                <p className='footer-item-text'><a href='https://github.com/Idera-oluwa/my-portfolio-website'>Open source</a></p>
            </div>
        </div>
        <p className='footer-text'>© {new Date().getFullYear()}  All rights reserved</p>
        </div>
    )
}

export default Footer
