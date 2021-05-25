import React from 'react'
import Fade from 'react-reveal/Fade';
import Project from './Project'

const projectArr = [
  {
    title:"TFT Tracker",
    description: "Made in a team as apart of a bootcamp based hackathon within 36 hours. TFT tracker is an application to track your game history using Riot API. This was done in a group of 3 and I primarily focused on creating the express server and the javascript elements to pull the data and display it. Unfortunately this API requires the key to be updated every 24 hours, meaning this app is not active. If you would like to view the app please contact me and I will update the key.",
    imageSource: "pics/tft-tracker.png",
    alt: "tft-tracker",
    frameworks: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "RiotAPI"],
    linkToWork: "https://github.com/The-Box-Box/TFT-Tracker"
  },
  {
    title: "Picz-R-Us",
    description: "A two sided marketplace created to buy and sell stock footage. This was my first full-stack application and used a variety of languages. The largest challenge on this was database structures and understanding what a good databse looks like.",
    imageSource: "pics/picz-r-us.png",
    alt: "2 sided marketplace",
    frameworks: ["HTML", "Tailwind-CSS", "Ruby on Rails", "PostgreSQL" , "Stripe", "Heroku", "Cloudinary" ],
    linkToWork: "https://picz-r-us.herokuapp.com/"
  },
  {
    title: "First Portfolio",
    description: "This was my first project completed at CoderAcademy. It was the first time I had used HTML, CSS and SCSS which overall forced me to start thinking more like a programmer and led me to the career path I am on today. The challenges I faced with this project was attempting to make a versatile and mobile friendly website while not using JavaScript.",
    imageSource: "pics/portfolio.png",
    alt: "portfolio",
    frameworks: ["HTML", "SCSS", "CSS", "Netlify"],
    linkToWork: "https://jaredgold.netlify.app/index.html"
  },
  {
    title: "Casino Application",
    description: "My second project completed at CoderAcademy. It is a collection of three casino games Black Jack, Stock Crash and Horse Races. This collection was created using only Ruby and was my first endeavour to use logic in my programming. This was a challenge to complete but well worth the endeavour as it taught me a lot about multi threaded applications.",
    imageSource: 'pics/casino.png',
    alt: "terminal casino",
    frameworks: ["Ruby"],
    linkToWork: "https://github.com/JaredGold/Casino"
  }

]

const Projects = () => {
  return(
    <div className="min-h-screen py-16 bg-gradient-to-b from-gray-200 to-gray-50 w-100% flex justify-center flex-wrap md:space-y-0 md:gap-8 space-y-8 items-center content-center" id="projects">
      {projectArr.map((pro, index) => (
        < Fade >
          <Project 
            title={pro.title}
            description={pro.description}
            imageSource={pro.imageSource}
            alt={pro.alt}
            frameworks={pro.frameworks}
            linkToWork={pro.linkToWork}
            key={index}
            />
        </Fade>
      ))}
    </div>
  )
}

export default Projects