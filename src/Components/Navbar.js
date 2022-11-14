import React from 'react'
import './Navbar.css';
import {FaBars} from 'react-icons/fa'
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import {Link} from 'react-scroll'

const Navbar = ({showSidebar,show,toggle,handleToggle}) => {
    return (
        <div className='navbar-container'>
            <div className='image-container-div'>
                <img src='Images/Idera.png' alt='' className={`nav-image`}/>
                <h4>DERAH</h4>
            </div>
            <div className='nav-items-container'>
                <p className='nav-item'><Link  to="home" spy={true} smooth={true}>HOME</Link></p>
                <p className='nav-item'><Link  to="features" spy={true} smooth={true}>FEATURES</Link></p>
                <p className='nav-item'><Link  to="languages" spy={true} smooth={true}>LANGUAGES</Link></p>
                <p className='nav-item'><Link  to="portfolio" spy={true} smooth={true}>PORTFOLIO</Link></p>
                <p className='nav-item'><Link  to="testimonial" spy={true} smooth={true}>TESTIMONIAL</Link></p>
                <p className='nav-item'>BLOG</p>
                <p className='nav-item'><Link  to="contacts" spy={true} smooth={true}>CONTACTS</Link></p>
                <button className='nav-button'><Link  to="contacts" spy={true} smooth={true}>ORDER NOW</Link></button>
            </div>
            <FaBars className={`bars-icon ${show && 'bar-show'}`} onClick={showSidebar}/>
            <div className='mode-icons' onClick={handleToggle}>{toggle ? <MdLightMode/> : <MdDarkMode/>}</div>
        </div>
    )
}

export default Navbar
