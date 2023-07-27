'use client'
import Link from 'next/link'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
      <div className='navbar-container'>
        <Link href='/'>
          Listado de Stock
        </Link>
      </div>
    </header>
  )
}

export default Navbar
