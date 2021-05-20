import React, {useState} from 'react'


const Project = (props) => {
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    active ? setActive(false) : setActive(true)
  }

  const modal = () => {
    return(
      <>
      <p className="text-center">{props.description}</p>
      <h3 className="text-xl text-center font-medium pt-3">Framework{props.frameworks.length > 1 ? "s" : null} Used</h3>
      <ul className="text-center">
        {props.frameworks.map((lang) => <li>{lang}</li>)}
      </ul>
      <a href={props.linkToWork} className="text-center pt-4 text-purple-600">Link To Project</a>

      </>
      
    )
  }

  return(
    <div onMouseEnter={toggleActive} onMouseLeave={toggleActive} className="bg-white rounded-md flex w-96 flex-col p-4 shadow-2xl" >
      <img src={props.imageSource} alt={props.alt} className="rounded-t-md self-center" />
      <h2 className="text-2xl text-center font-medium pt-2">{props.title}</h2>
      {active ? modal() : null}

    </div>
  )
}

export default Project