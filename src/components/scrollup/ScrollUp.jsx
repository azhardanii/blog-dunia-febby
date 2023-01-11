import React from 'react'
import {RxThickArrowUp} from 'react-icons/rx'
import './scrollup.css'

const ScrollUp = () => {
  window.addEventListener('scroll', function() {
    const scrollUp = document.querySelector('.scrollup')
    if (this.scrollY >= 425) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
  })

  return (
    <div onClick={ () => {window.scrollTo({top: 0})} } className='scrollup'>
      <RxThickArrowUp className='scrollup-icon' />
    </div>
  )
}

export default ScrollUp