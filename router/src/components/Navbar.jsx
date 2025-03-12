import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className='flex justify-between bg-black p-2'>
        <Link to="/" className='text-white text-2xl'>Website</Link>
        <ul className='flex gap-6 text-2xl text-white'>
            <li>
                <Link to="/about">About</Link>
            </li>
       
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            
        </ul>
    </nav>
  )
}

export default Navbar


