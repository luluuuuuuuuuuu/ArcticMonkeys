import React from 'react'
import './Navbar.css';

const navbar = ({band}) => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
        <div className='container'>
            <a className='navbar-brand text-uppercase' href='/'>{band}</a>

        </div>

    </nav>
  )
}

export default navbar
