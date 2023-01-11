import React from 'react'
import {GiNothingToSay} from 'react-icons/gi'

const Data = () => {
  return (
    <div className="about-data">
        <div className="about-title">Febby Anggun <div className='hand'>👋🏻</div></div>
        <h3 className="about-subtitle">Learner | Writer | Adventurer</h3>
        <p className="about-description">Oh haii, hollaa…<br />
            Aku seorang yang tertarik dengan berbagai hal. Beberapa cerita akan ku abadikan diberanda ini, semoga sesuatu yang baik dan menyenangkan bisa tumbuh disini.</p>
        <a href="#contact" className='button button-flex'>
            Silahkan di Sapa
            <GiNothingToSay size={20} className='data-icon' />
        </a>
    </div>
  )
}

export default Data