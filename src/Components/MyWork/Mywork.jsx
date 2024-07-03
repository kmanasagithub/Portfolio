import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import projects from '../data/projects.js'

const MyWork = () => {
  return (
    <div id="mywork" className='mywork'>
        <div className="mywork-title">
            <h1>My Recent Work</h1>
            <img src={theme_pattern} alt="logo" />
        </div>
        <div className="mywork-section">
          {
            projects.map((project) => {
              return <div className="projectItems" key={project.id}>
                <div className="info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="projectItemCta">
                <a href={project.github} className='github-btn' target='_blank'>GitHub</a>
                <a href={project.demo} className={project.demo === ""?"demo-btn liveDemoDisable":"demo-btn"} target='_blank'>LIVE Demo3</a>
                </div>

              </div>
            })
          }
        </div>
       
    </div>
  )
}

export default MyWork