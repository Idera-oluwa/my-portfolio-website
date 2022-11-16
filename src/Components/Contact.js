import React from 'react'
import './Contact.css'
import {FiFacebook,FiTwitter,FiLinkedin} from 'react-icons/fi';

const Contact = () => {
    return (
        <div className='contact-container' id='contacts'>
            <p className='contact-text'>CONTACT</p>
            <h1 className='contact-header'>Get In Touch</h1>
            <div className='contact-form-container'>
                <div className='form-info-container'>
                <img src='Images/handshake.avif' alt='' className='contact-image'/>
                <h2 className='contact-form-info-header'>Isa Zainab Ideraoluwa</h2>
                <p className='contact-form-info-text'>Software Engineer</p>
                <p className='contact-form-info-text'>I am available for freelance work. Connect with me via email and call to my account.</p>
                <p className='contact-form-info-text'>Phone +2348086581111</p>
                <p className='contact-form-info-text'>Email ideraoluwaisa29@gmail.com</p>
                <p className='contact-form-info-text'>Find Me On</p>
                <div className='hero-cards contact-cards'>
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
                <form className='form-container' id='contact'
                action="https://formspree.io/f/xbjbwznw"
                method="POST"
                >
                <div className='form-name-email'>
                    <div className='form-item'>
                        <label htmlFor='name'>YOUR NAME</label>
                        <input className='input-text' type='text' name='name' required/>
                    </div>
                    <div className='form-item'>
                        <label htmlFor='phone'>PHONE NUMBER</label>
                        <input type='text' className='input-text' name='phone'/>
                    </div>
                </div>
                <div className='form-item-2'>
                        <label htmlFor='email'>EMAIL</label>
                        <input type='text' className='input-text' name='email' required/>
                    </div>
                    <div className='form-item-2'>
                        <label htmlFor='subject'>SUBJECT</label>
                        <input type='text' className='input-text' name='subject'/>
                    </div>
                    <div className='form-item-2'>
                        <label htmlFor='message'>YOUR MESSAGE</label>
                        <textarea className='input-text text-area' name='message' required/>
                    </div>
                    <button className='contact-form-button' type='submit'>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
