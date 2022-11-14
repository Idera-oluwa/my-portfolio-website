import React from 'react'
import './Portfolio.css'
import {portfolioData} from './data'
import {MdFavoriteBorder} from 'react-icons/md'

const Portfolio = () => {
    return (
        <div className='portfolio-container' id='portfolio'>
            <p className='portfolio-text'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
            <h1 className='portfolio-header'>My Portfolio</h1>
            <div className='portfolio-cards-container'>
              {portfolioData.map((data)=>{
                  const {id,img,text,likes,title,link} = data;
                  return(
                      <a href={link} target="_blank" rel="noreferrer"><div className='portfolio-card' key={id}>
                      <img src={img} alt='' className='portfolio-card-img'/>
                      <div className='portfolio-text-likes'>
                          <p className='portfolio-card-text'>{text}</p>
                          <p><MdFavoriteBorder/> {likes}</p>
                      </div>
                      <h3 className='portfolio-title'>{title}</h3>
                      </div></a>
                  )
              })}
            </div>
        </div>
    )
}

export default Portfolio
