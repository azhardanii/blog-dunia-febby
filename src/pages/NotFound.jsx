import React from 'react'
import { Link } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'

const NotFound = () => {
  return (
    <section className='notfound-content'>
        <h1>Yahh, Ma'af Yang Kamu Cari Nggak Ada...</h1>
        <Link to='/' className='button'><BiLeftArrowAlt size={22} style={{ marginBottom:-4, marginRight: 3 }}/>Kembali Aja</Link>
    </section>
  )
}

export default NotFound