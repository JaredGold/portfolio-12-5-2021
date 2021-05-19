import React from 'react'
import Fade from 'react-reveal/Fade';
import Project from './Project'

const Projects = () => {
  return(
    <div className="h-screen bg-gray-100 w-100% flex justify-evenly flex-wrap gap-8 items-center" id="projects">
      <Fade left>
        <Project 
          title="Casino Terminal" 
          description="My first main project completed at CoderAcademy.
          It is a collection of three casino games Black Jack, Stock Crash and Horse Races."
          imageSource='pics/casino.png'
          alt='terminal casino'
          frameworks={["Ruby"]}
          linkToWork="https://github.com/JaredGold/Casino"
        />
      </Fade>
      
    </div>
  )
}

export default Projects