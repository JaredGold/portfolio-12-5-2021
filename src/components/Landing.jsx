import React from 'react'
import Typed from 'react-typed';
// import Canvas from './Canvas'

const Landing = () => {

  return (
    <div className="h-screen bg-gray-900 w-100% flex justify-center flex-col items-center" id="home">
      {/* <Canvas className="absolute inset-0 z-10"/> */}
      <p className="text-gray-200 text-center text-4xl z-50 mb-4">
        Hello, I am <span className="text-pink-400">Jared Goldstein</span><br/>
        I am a <Typed 
          strings={[
            "Gamer",
            "Father",
            "Magician",
            "Coder",
            "Bug Handler",
            "Full-Stack Web Developer."
          ]}
          typeSpeed={40}
          backSpeed={30}
        />
      </p>
      <a href="#about" className="border-2 hover:bg-purple-400 hover:border-purple-400" ><div className="mx-4 my-2 text-white ">Show More!</div></a>
    </div>
  )
}

export default Landing