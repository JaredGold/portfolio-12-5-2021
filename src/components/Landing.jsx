import React from 'react'
import Typed from 'react-typed';
import {TiArrowSortedDown} from 'react-icons/ti'

const Landing = () => {

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-800 w-100% flex justify-center flex-col items-center" id="home">
      <p className="font-mono text-gray-200 text-center text-4xl mb-4 select-none">
        Hello, I am <span className="text-pink-400">Jared Goldstein</span><br/>
        I am a <span className="text-purple-400"><Typed 
          strings={[
            "Gamer",
            "Father",
            "Magician",
            "Philomath",
            "Bug Handler",
            "Full-Stack Developer."
          ]}
          typeSpeed={20}
          backSpeed={10}
        /></span>
      </p>
      <a href="#about" className="border-2 transition duration-100 hover:bg-purple-400 hover:border-purple-400" ><div className="mx-4 my-2 text-white ">Show More!</div></a>
      <p className="text-white absolute bottom-10 text-2xl animate-bounce"><TiArrowSortedDown /></p>
    </div>
  )
}

export default Landing