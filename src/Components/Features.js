import React from 'react'
import {featuresData} from './data.js'
import './Features.css'

const Features = () => {
    return (
        <div className='features-container' id='features'>
            <p className='features-text'>FEATURES</p>
            <h1 className='features-header'>What I Do</h1>
            <div className='features-cards-container'>
            {featuresData.map((data)=>{
            const {id,icon,title,details}=data;
            return(
                <div className='features-card' key={id}>
                  <p className='features-card-icon'>{icon}</p>
                  <h2 className='features-card-title'>{title}</h2>
                  <p className='features-card-details'>{details}</p>
                </div>
            )
            })}
            </div>
        </div>
    )
}

export default Features
