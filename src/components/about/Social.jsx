import React from 'react'
import {BsWhatsapp, BsInstagram} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'
import {RiYoutubeLine} from 'react-icons/ri'

const Social = () => {
  return (
    <div className="about-social">
        <a href="https://www.instagram.com/febby_anggun.s/" className="about-social-icon" rel="noreferrer" target="_blank">
            <BsInstagram />
        </a>
        <a href="https://wa.me/6285161047107" className="about-social-icon" rel="noreferrer" target="_blank">
            <BsWhatsapp />
        </a>
        <a href="https://tiktok.com/@febby_anggun" className="about-social-icon" rel="noreferrer" target="_blank">
            <FaTiktok />
        </a>
        <a href="https://youtube.com/@febbyanggun" className="about-social-icon" rel="noreferrer" target="_blank">
            <RiYoutubeLine className='yt-icon' size={25} />
        </a>
    </div>
  )
}

export default Social