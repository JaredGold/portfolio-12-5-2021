import React from 'react'

const NavLink = ( {name} ) => {
  const styles = "md:mr-8 hover:text-purple-300 text-white self-center" 

  return (
    <li className={styles} >
      <a href={"#" + name.toLowerCase()}>{name}</a>
    </li>
  )
}

export default NavLink