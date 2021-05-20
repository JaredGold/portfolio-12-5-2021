import React from 'react'
import Fade from 'react-reveal/Fade';
import Project from './Project'

const projectArr = [
  {
    title: "Casino Terminal",
    description: "My second project completed at CoderAcademy. It is a collection of three casino games Black Jack, Stock Crash and Horse Races.",
    imageSource: 'pics/casino.png',
    alt: "terminal casino",
    frameworks: ["Ruby"],
    linkToWork: "https://github.com/JaredGold/Casino"
  },
  {
    title: "First Portfolio",
    description: "This was my first project completed at CoderAcademy. It was the first time I had used HTML, CSS and SCSS which overall forced me to start thinking more like a programmer and led me to the career path I am on today",
    imageSource: "pics/portfolio.png",
    alt: "portfolio",
    frameworks: ["HTML", "SCSS", "CSS"],
    linkToWork: "https://jaredgold.netlify.app/index.html"
  }
]


const Projects = () => {
  return(
    <div className="h-screen bg-gray-100 w-100% flex justify-evenly flex-wrap gap-8 items-center" id="projects">
      {/* <Fade left> */}
        {projectArr.map((pro) => (
          <Project 
            title={pro.title}
            description={pro.description}
            imageSource={pro.imageSource}
            alt={pro.alt}
            frameworks={pro.frameworks}
            linkToWork={pro.linkToWork}
          />)  )}
      {/* </ Fade> */}
    </div>
  )
}

export default Projects