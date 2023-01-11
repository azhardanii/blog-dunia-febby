import React from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { CgCalendarDates } from 'react-icons/cg'
import { Link, useParams } from 'react-router-dom'
import dataBlog from '../components/blog/data.json'
import './pages.css'

const Article = () => {  
  const {slug} = useParams()
  const page = dataBlog.map(e => e.slug).indexOf(slug)
  return (    
    <article>
        {dataBlog
            .filter((content) => slug === content.slug)
            .map(content => {          
                return <div key={content.slug}>
                <h2 className='section-title'>{content.title}</h2>
                <p className='section-subtitle'>
                    <CgCalendarDates size={20} style={{ marginBottom: -4, marginRight: 4 }} />{content.date} 
                    <HiOutlineLocationMarker size={20} style={{ marginBottom: -3, marginRight: 3, marginLeft: 15 }} />{content.location}
                </p>
                
                <div className="container blog-content">
                    <img src={content.banner} className='radius width-img' alt="#" />

                    <div dangerouslySetInnerHTML={{ __html: content.para }}></div>                
                </div>
            </div>
        })}
        <div className="blog-footer-container">
            <div className="blog-footer">
                {dataBlog.slice((page-1), page).map(prev => {
                    return <Link onClick={() => { window.scrollTo({top: 0}) }} to={`../blog/${prev.slug}`} className="blog-footer">                    
                    <div>
                        <BiLeftArrowAlt size={25} className='footer-icon'/>
                        <p>{prev.title}</p>    
                    </div>
                </Link>
                })}

                <Link to='/blog' onClick={() => {window.scrollTo({top: 0})}}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className='button'>Lihat Daftar Bacaan</button>    
                    </div>
                </Link>

                {dataBlog.slice(page, (page+1)).map(next => {                    
                    return<Link onClick={() => { window.scrollTo({top: 0}) }} to={`../blog/${next.slug}`} className="blog-footer">
                    <div>
                        <p style={{ textAlign:'right' }}>{next.title}</p>
                        <BiRightArrowAlt size={25} className='footer-icon' />
                    </div>
                </Link>
                })}
            </div>        
        </div>            
    </article>                 
  )
}

export default Article