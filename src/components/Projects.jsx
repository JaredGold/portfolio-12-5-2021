import React from 'react'
import Fade from 'react-reveal/Fade';

const Projects = () => {
  return(
    <div className="h-screen bg-gray-100 w-100% flex justify-evenly flex-wrap gap-8 items-center" id="projects">
      <Fade left>
        <div className="bg-white rounded-md flex w-96 flex-col p-4 shadow-2xl" >
          <img src="https://picsum.photos/400/300" alt="Random Temp" className="rounded-t-md self-center" />
          <h2 className="text-2xl text-center font-medium pt-2">Project Title</h2>
          <p className="text-center">This project was done while I was studying my course.
            In this I was forced to learn how to use these very interesting languages.
            I used these languages as such and it made me level up.
          </p>
          <h3 className="text-xl text-center font-medium pt-3">Frameworks Used</h3>
          <ul className="text-center">
            <li>Lang 1</li>
            <li>Lang 2</li>
            <li>Lang 3</li>
          </ul>
          <a href="/" className="text-center pt-4 text-purple-600">Link To Project</a>
        </div>
      </Fade>
      
    </div>
  )
}

export default Projects