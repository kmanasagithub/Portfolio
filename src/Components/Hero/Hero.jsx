import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import myimg from '../../assets/myimg1.jpg'

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={myimg} alt="pro-Image" />
        <h1>Hi,I'm <br /><span>Manasa Kurella</span></h1>
        <p>I'm a passionate Junior Mern Stack Developer</p>
        <div className="hero-section">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className="hero-resume"><a href="Final Resume(1).pdf" download="Final_Resume.pdf">Download CV</a></div>
        </div>
    </div>
  )
}

export default Hero