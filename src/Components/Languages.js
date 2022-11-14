import React from 'react'
import './Languages.css'

const Languages = () => {
    return (
        <div className='languages-total-container' id='languages'>
            <p className='languages-text'>LANGUAGES</p>
            <h1 className='languages-header'>My Skills</h1>
            <div className='languages-container'>
            <div className='language-container'>
                <img alt='' src='Images/html-logo-bg.png' className='lang-img'/>
                <p className='lang-text'>HTML</p>
            </div>
            <div className='language-container'>
                <img alt='' src='Images/css-logo-bg.png' className='lang-img'/>
                <p className='lang-text'>CSS</p>
            </div>
            <div className='language-container'>
                <img alt='' src='Images/js-logo-bg.png' className='lang-img'/>
                <p className='lang-text'>JavaScript</p>
            </div>
            <div className='language-container'>
                <img alt='' src='Images/bootstrap-logo-bg.png' className='lang-img'/>
                <p className='lang-text'>Bootstrap</p>
            </div>
            <div className='language-container'>
                <img alt='' src='Images/sass-logo-bg.png' className='lang-img'/>
                <p className='lang-text'>SASS</p>
            </div>
            <div className='language-container'>
                <img alt='' src='Images/react-logo-bg.png' className='lang-img'/>
                <p className='lang-text'>React</p>
            </div>
            <div className='language-container'>
                <img alt='' src='Images/git-logo-bg.png' className='lang-img'/>
                <p className='lang-text'>Git</p>
            </div>
            <div className='language-container'>
                <img alt='' src='Images/redux-logo-bg.png' className='lang-img'/>
                <p className='lang-text'>Redux</p>
            </div>
            <div className='language-container'>
                <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333' className='lang-img'/>
                <p className='lang-text'>Tailwind</p>
            </div>
            <div className='language-container'>
                <img alt='' src='https://res.cloudinary.com/practicaldev/image/fetch/s--bWAzTHrN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h8vshokrazrgrnurqed8.jpg' className='lang-img next'/>
                <p className='lang-text'>Next js</p>
            </div>
            <div className='language-container'>
                <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png?20161105194737' className='lang-img'/>
                <p className='lang-text'>GraphQL</p>
            </div>
            <div className='language-container'>
                <img alt='' src='https://www.finsmes.com/wp-content/uploads/2021/07/graphcms.jpg' className='lang-img'/>
                <p className='lang-text'>Graphcms</p>
            </div>
            <div className='language-container'>
            <img alt='' src='Images/firebase-logo.png' className='lang-img'/>
            <p className='lang-text'>Firebase</p>
            </div>
            </div>
        </div>
    )
}

export default Languages
