import React from 'react'
import Fade from 'react-reveal/Fade';
import Project from './Project'

const Projects = () => {
  return(
    <div className="h-screen bg-gray-100 w-100% flex justify-evenly flex-wrap gap-8 items-center" id="projects">
      <Fade left>
        <Project 
          title="Project Title" 
          description="This project was done while I was studying my course.
          In this I was forced to learn how to use these very interesting languages.
          I used these languages as such and it made me level up."
          imageSource="https://picsum.photos/400/300"
          frameworks={["HTML", "CSS", "React.js"]}
          linkToWork="/"
        />
      </Fade>
      
    </div>
  )
}

export default Projects