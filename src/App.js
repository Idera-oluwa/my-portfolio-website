import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import Languages from './Components/Languages'
import Testimonial from './Components/Testimonial'

const getStorageTheme =()=>{
  let theme = 'light-theme'
  if (localStorage.getItem('theme')){
    theme = localStorage.getItem('theme')
  }
  return theme
}

function App() {
  const [show, setShow] = useState(false);
  const [theme,setTheme] = useState(getStorageTheme());
  const [toggle,setToggle] = useState(false)
  const handleToggle =()=>{
    if (theme === 'light-theme'){
      setTheme('dark-theme')
      setToggle(true)
    }
    else{
      setTheme('light-theme')
      setToggle(false)
    }
  }
  useEffect(()=>{
    document.documentElement.className=theme;
    localStorage.setItem('theme',theme)
  },[theme])
  const showSidebar =()=>{
   setShow(true)
  }
  const hideSidebar =()=>{
    setShow(false)
  }
  return (
    <div className="App">
    <Sidebar hideSidebar={hideSidebar} show={show}/>
     <Navbar showSidebar={showSidebar} show={show} toggle={toggle} handleToggle={handleToggle}/>
     <Hero/>
     <Features/>
     <Languages/>
     <Portfolio/>
     <Testimonial/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
