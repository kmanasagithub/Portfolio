import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
          <h1>About me</h1>
          <img src={theme_pattern} alt="pattern" />
        </div>
        <div className="about-section">
            <div className="about-para">
              <p>Hi,I'm Manasa Kurella with a passion for building innovative web applications.As a budding full stack developer,I'm excited to bring my skills and enthusiasm to the tech industry.</p>
              <p>During my Academic Journey,I gained a solid foundation in programming fundmentals,Data structures and software engineering principles.I also explores various programming languages and developed a keen interest in full stack development.</p>
                <p>I'm eager to apply my knowledge and skills in real-world projects,collaborating with teams to design,develop and deploy scalable and efficient applications.</p>
               
            </div>
            <div className="connect-link">
              <a href="https://www.linkedin.com/in/kurella-manasa-65b6a6255" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="https://github.com//kmanasagithub" target="_blank"><i class="fa-brands fa-github"></i></a>
              <a href="https://www.instagram.com/manu_since2k4"><i class="fa-brands fa-instagram" target="_blank"></i></a>
            </div>
           
          </div>
    </div>
  )
}

export default About