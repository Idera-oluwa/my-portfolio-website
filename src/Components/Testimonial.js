import React from 'react'
import './Testimonial.css'
import {reviews} from './data'
import {BsStarFill} from 'react-icons/bs'
import { FaQuoteRight, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Pagination, A11y,Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {
    const SwiperButtonNext = ({ children }) => {
        const swiper = useSwiper();
        return <div className='testimonial-arrow-div' onClick={() => swiper.slideNext()}>{children}</div>;
      };
      const SwiperButtonPrev = ({ children }) => {
        const swiper = useSwiper();
        return <div className='testimonial-arrow-div' onClick={() => swiper.slidePrev()}>{children}</div>;
      };
    return (
        <div className='testimonial-total-container' id='testimonial'>
            <p className='testimonial-text'>WHAT CLIENTS SAY</p>
            <h1 className='testimonial-header'>Testimonial</h1>
            <Swiper
            className='swiper-container'
      modules={[Pagination,Navigation, A11y]}
      spaceBetween={50}
      pagination={{ clickable: true }}
      slidesPerView={1}
      navigation
        visibilityFullFit= {true}
        autoResize= {false}
    >
            {reviews.map((review)=>{
            const {id, name, company, job, date, image, text} = review;
            return(
                <SwiperSlide key={id}>
                <div className='testimonial-container'>
                <div className='testimonial-image-card-container'>
                 <img src={image} alt='' className='testimonial-image'/>
                 <p className='testimonial-image-text'>{company}</p>
                 <h2 className='testimonial-name'>{name}</h2>
                 <p className='testimonial-work'>{job}</p>
                </div>
                <div className='testimonial-main-container'>
                <div className='testimonial-icons-container'>
                    <FaQuoteRight className='quote-icon'/>
                    <div className='testimonial-arrows-container'>
                    <SwiperButtonPrev><FaArrowLeft/></SwiperButtonPrev>
                    <SwiperButtonNext><FaArrowRight/></SwiperButtonNext>
                    </div>
                </div>
                <div className='testimonial-main-cards-container'>
                 <div className='testimonial-main-header-container'>
                     <div >
                         <h3 className='testimonial-job'>{job}</h3>
                         <p className='testimonial-date'>{date}</p>
                     </div>
                     <div className='star-icons-container'>
                         <BsStarFill/>
                         <BsStarFill/>
                         <BsStarFill/>
                         <BsStarFill/>
                         <BsStarFill/>
                     </div>
                 </div>
                 <hr/>
                 <p className='testimonial-content-text'>{text}
                       </p>
                </div>
                </div>
            </div>
            </SwiperSlide>
            )
            })}
        </Swiper>
        </div>
    )
}

export default Testimonial
