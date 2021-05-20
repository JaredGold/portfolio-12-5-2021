import React from 'react'
import Fade from 'react-reveal/Fade';
import Project from './Project'

const projectArr = [
  {
    title: "Portfolio (dated)",
    description: "This was my first project completed at CoderAcademy. It was the first time I had used HTML, CSS and SCSS which overall forced me to start thinking more like a programmer and led me to the career path I am on today",
    imageSource: "pics/portfolio.png",
    alt: "portfolio",
    frameworks: ["HTML", "SCSS", "CSS", "Netlify"],
    linkToWork: "https://jaredgold.netlify.app/index.html"
  },
  {
    title: "Casino Application",
    description: "My second project completed at CoderAcademy. It is a collection of three casino games Black Jack, Stock Crash and Horse Races.",
    imageSource: 'pics/casino.png',
    alt: "terminal casino",
    frameworks: ["Ruby"],
    linkToWork: "https://github.com/JaredGold/Casino"
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
    title:"TFT Tracker",
    description: "Made in a team as apart of a bootcamp based hackathon within 36 hours, TFT tracker is an application to track your game history using Riot API. This was done in a group of 3 and I primarily focused on creating the express server and the javascript elements to pull the data and display it. Unfortunately this API requires the key to be updated every 24 hours, meaning this app is not active. If you would like to view the app please contact me and I will update the key.",
    imageSource: "pics/tft-tracker.png",
    alt: "tft-tracker",
    frameworks: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
    linkToWork: "https://github.com/The-Box-Box/TFT-Tracker"
  }
]

const Projects = () => {
  return(
    <div className="min-h-screen py-16 bg-gray-100 w-100% flex justify-evenly flex-wrap gap-8 items-center" id="projects">
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