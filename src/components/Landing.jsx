import React from 'react'
// import Canvas from './Canvas'

const Landing = () => {
  

  return (
    <div className="h-screen bg-green-900 w-100% flex justify-center items-center" id="home">
      {/* <Canvas className="absolute inset-0 z-10"/> */}
      <p className="text-gray-200 text-center text-4xl bg-green-900 z-50">
        Hello I am <span className="text-pink-400">Jared Goldstein</span><br/>
        I am a full-stack developer.
      </p>
    </div>
  )
}

export default Landing