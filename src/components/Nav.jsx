import React from 'react'
import NavLink from './NavLink'

const Nav = () => {

  const navStyle = "sticky top-0 md:pl-16 h-12 bg-gray-800 flex z-50 md:justify-start justify-center border-b-4 border-purple-400"

  return(
    <nav className={navStyle} >
      <ul className="flex flex-row w-screen md:w-auto justify-evenly" >
        <NavLink name="Home" />
        <NavLink name="About" />
        <NavLink name="Projects" />
        <NavLink name="Contact" />
      </ul>
    </nav>
  )
}

export default Nav