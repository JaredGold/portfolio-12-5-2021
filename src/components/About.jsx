import React from 'react'
import Fade from 'react-reveal/Fade';

const About = () => {
  return(
    <div className="h-screen bg-green-900 w-100% flex justify-center items-center flex-col" id="about">
      <Fade left>
        <p>This is something Important</p>
      </Fade>
      <Fade right>
        <p>This is something Important</p>
      </Fade>
    </div>
  )
}

export default About