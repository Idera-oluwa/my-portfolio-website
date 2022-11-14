import React from 'react'
import './Sidebar.css'
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Sidebar=({hideSidebar,show}) =>{
    return (
       <div>
          {show &&  <div className='sidebar-total-container'></div>}
           <div className={show ? 'show' : 'sidebar-container'}>
        <div className='sidebar-nav-container'>
             <div className='image-container-div'>
                <img src='Images/Idera.png' alt='' className='nav-image'/>
                <h4>DERAH</h4>
            </div>
            <FaTimes className='times-icon' onClick={hideSidebar}/>
            </div>
            <div className='sidebar-items-container'>
                <Link  to="home" spy={true} smooth={true} ><p className='sidebar-item' onClick={hideSidebar}>HOME</p></Link>
                <Link  to="features" spy={true} smooth={true}><p className='sidebar-item' onClick={hideSidebar}>FEATURES</p></Link>
                <Link  to="languages" spy={true} smooth={true} ><p className='sidebar-item' onClick={hideSidebar}>LANGUAGES</p></Link>
                <Link  to="portfolio" spy={true} smooth={true}><p className='sidebar-item' onClick={hideSidebar}>PORTFOLIO</p></Link>
                <Link  to="testimonial" spy={true} smooth={true}><p className='sidebar-item' onClick={hideSidebar}>TESTIMONIAL</p></Link>
                <p className='sidebar-item'>BLOG</p>
                <Link  to="contacts" spy={true} smooth={true}><p className='sidebar-item' onClick={hideSidebar}>CONTACTS</p></Link>
                <Link  to="contacts" spy={true} smooth={true}><button className='sidebar-button' onClick={hideSidebar}>ORDER NOW</button></Link>
            </div>
            </div>
       </div>
    )
}
export default Sidebar
