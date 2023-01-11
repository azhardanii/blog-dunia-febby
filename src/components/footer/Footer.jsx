import React from 'react'
import {
    TbBrandYoutube, TbBrandInstagram,
    TbBrandWhatsapp, TbBrandTiktok
} from 'react-icons/tb'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer-container container">
            <h1 className="footer-title">Febby Anggun .S</h1>

            <ul className="footer-list">
                <li>
                    <a href="#about" className="footer-link">Tentangku</a>
                </li>
                <li>
                    <a href="#bloglist" className="footer-link">Blog Note</a>
                </li>
                <li>
                    <a href="#contact" className="footer-link">Kontak</a>
                </li>
            </ul>

            <div className="footer-social">
                <a href="https://www.instagram.com/febby_anggun.s/" className="footer-social-link" rel="noreferrer" target="_blank">
                    <TbBrandInstagram />
                </a>
                <a href="https://wa.me/6285161047107" className="footer-social-link" rel="noreferrer" target="_blank">
                    <TbBrandWhatsapp />
                </a>
                <a href="https://tiktok.com/@febby_anggun" className="footer-social-link" rel="noreferrer" target="_blank">
                    <TbBrandTiktok />
                </a>            
                <a href="https://youtube.com/@febbyanggun" className="footer-social-link" rel="noreferrer" target="_blank">
                    <TbBrandYoutube className='footer-yt-icon' />
                </a>            
            </div>

            <span className='footer-created'>
                Created with 🖤 by 
                <a href="#about">Diurnal Project</a>
            </span>
        </div>
    </footer>
  )
}

export default Footer