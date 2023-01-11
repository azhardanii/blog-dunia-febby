import React from 'react'
import {BiRightArrowAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './bloglist.css'
import dataBlog from '../blog/data.json'

const FullBlogList = () => {
  return (
    <>
        <section className="bloglist" id="bloglist">
            <h2 className="section-title">♡ Selamat Menyelami ♡</h2>
            <p className='section-subtitle'>Sepenggal Duniaku Disini</p>

            <div className="bloglist-container container grid">
                {dataBlog.map(content => {                    
                    return <div className="bloglist-content">
                        <div className='bloglist-img' style={{ backgroundImage: `url(${content.banner})` }}>
                            <div className='bloglist-img-content'></div>                              
                        </div>
                        <h3 className="bloglist-title">{content.title}</h3>
                        <Link onClick={() => { window.scrollTo({top: 0}) }} to={content.slug} className='bloglist-button'>Baca Selengkapnya <BiRightArrowAlt size={17} className='bloglist-button-icon' /></Link>
                    </div>
                })}                
            </div>
        </section>
    </>
  )
}

export default FullBlogList