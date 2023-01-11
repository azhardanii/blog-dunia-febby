import React from 'react'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'
import './about.css'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="about-container container grid">
            <div className="about-content grid">
                <Social />
                <div className="about-img"></div>
                <Data />
            </div>

            <ScrollDown />
        </div>
    </section>
  )
}

export default About