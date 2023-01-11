import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {RxPerson} from 'react-icons/rx'
import {MdOutlineStickyNote2} from 'react-icons/md'
import {RiAppsLine, RiCloseFill, RiMessage3Line} from 'react-icons/ri'
import './header.css'

const Header = () => {
  const [Toggle, setToggle] = useState(false)
  const [activeNav, setActiveNav] = useState('#active')

  window.addEventListener('scroll', function() {
    const header = document.querySelector('header')
    if (this.scrollY >= 80) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
  })  
  
  return (
    <header>
        <nav className="container">
            <Link to='/' className='nav-logo'>Febby Anggun .S</Link>

            <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                <ul className="nav-list grid">                    
                    <li className="nav-item">
                        <Link to='/' onClick={() => { setActiveNav('#about'); window.scrollTo({top: 0}) }} className={activeNav === '#about' ? 'nav-link active-link' : 'nav-link'}>
                            <RxPerson size={18} className='nav-icon' />
                            Berandaku
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/blog' onClick={() => { setActiveNav('#bloglist'); window.scrollTo({top: 0}) }} className={activeNav === '#bloglist' ? 'nav-link active-link' : 'nav-link'}>
                            <MdOutlineStickyNote2 size={18} className='nav-icon' />
                            Blog Note
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' onClick={() => { setActiveNav('#contact'); window.scrollTo({top: 0}) }} 
                            className={activeNav === '#contact' ? 'nav-link active-link' : 'nav-link'}>
                            <RiMessage3Line size={18} className='nav-icon' />
                            Kontak
                        </Link>
                    </li>

                    <RiCloseFill size={20} className='nav-close' onClick={() => setToggle(!Toggle)} />
                </ul>
            </div>

            <div className='nav-toggle' onClick={() => setToggle(!Toggle)}>
                <RiAppsLine size={23} />
            </div>
        </nav>
    </header>
  )
}

export default Header