import React from 'react'
import "./header.css"
import { BrowserRouter, NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className='header-component-container'>
      <NavLink to="/home">
        Home
      </NavLink>
      <NavLink to="/about">
        About Me
      </NavLink>
      <NavLink to="/projects">
        Projects
      </NavLink>
    </nav>
  )
}
