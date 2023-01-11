import React from 'react'
import About from '../components/about/About';
import BlogList from '../components/bloglist/BlogList';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <main>
        <About />
        <BlogList />
        <Contact />
    </main>  
  )
}

export default Home