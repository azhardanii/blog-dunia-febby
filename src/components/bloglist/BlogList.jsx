import React from 'react'
import {BiRightArrowAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './bloglist.css'
import dataBlog from '../blog/data.json'


const BlogList = () => {
  return (
    <section className="bloglist" id="bloglist">
        <h2 className="section-title">♡ Selamat Menyelami ♡</h2>
        <p className='section-subtitle'>Sepenggal Duniaku Disini</p>

        <div className="bloglist-container container grid">
            {dataBlog.reverse().slice(0, 3).map(content => {                    
                return <div className="bloglist-content">
                <div className='bloglist-img' style={{ backgroundImage: `url(${content.banner})` }}>
                    <div className='bloglist-img-content'></div>                              
                </div>
                <h3 className="bloglist-title">{content.title}</h3>
                <Link onClick={() => { window.scrollTo({top: 0}) }} to={`blog/${content.slug}`} className='bloglist-button'>Baca Selengkapnya <BiRightArrowAlt size={17} className='bloglist-button-icon' /></Link>
            </div>
            })}            
        </div>
        <div className='more-button'>                
            <Link to='/blog' onClick={() => {window.scrollTo({top: 0})}} className='button button-flex'>
                Lihat Lebih Banyak Cerita
                <BiRightArrowAlt size={22} className='more-button-icon' />
            </Link>
        </div>
    </section>
  )
}

export default BlogList