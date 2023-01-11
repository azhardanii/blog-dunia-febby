import React from 'react'
import {BsWhatsapp, BsInstagram} from 'react-icons/bs'
import {HiOutlineMail, HiOutlinePaperAirplane} from 'react-icons/hi'
import {BiRightArrowAlt} from 'react-icons/bi'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact" id='contact'>
        <h2 className="section-title">Yukk Mulai Mengobrol</h2>
        <span className="section-subtitle">Teruntuk siapapun dan dimanapun</span>

        <div className="contact-container container grid">
            <div className="contact-content">
                <h3 className="contact-title">Bisa Melalui Dibawah Ini</h3>            
                <div className="contact-info">
                    <div className="contact-card">
                        <HiOutlineMail className='contact-card-icon' />
                        <h3 className="contact-card-title">Email</h3>
                        <span className="contact-card-data">febyanggun17@gmail.com</span>

                        <a href="mailto:febyanggun17@gmail.com" className='contact-button'>
                            Ngobrol di Email
                            <BiRightArrowAlt size={17} className='contact-button-icon' />
                        </a>
                    </div>
                    <div className="contact-card">
                        <BsWhatsapp className='contact-card-icon' />
                        <h3 className="contact-card-title">WhatsApp</h3>
                        <span className="contact-card-data">+62851 6104 7107</span>

                        <a href="https://wa.me/6285161047107?text=Haloo%20kak%20Anggun,%20aku%20chat%20dari%20websitenya%20kakak..." className='contact-button'>
                            Ngobrol di WhatsApp
                            <BiRightArrowAlt size={17} className='contact-button-icon' />
                        </a>
                    </div>
                    <div className="contact-card">
                        <BsInstagram className='contact-card-icon'/>
                        <h3 className="contact-card-title">Instagram</h3>
                        <span className="contact-card-data">@febby_anggun.s</span>

                        <a href="https://instagram.com/febby_anggun" className='contact-button'>
                            Ngobrol di DM IG
                            <BiRightArrowAlt size={17} className='contact-button-icon' />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="contact-content">
                <h3 className="contact-title">Atau Tulis Pesanmu Disini</h3>

                <form className='contact-form'>
                    <div className="contact-form-div">
                        <label className="contact-form-tag">Nama</label>
                        <input type="text" name="nama" className='contact-form-input' placeholder='Isikan namamu...' />
                    </div>
                    <div className="contact-form-div">                        
                        <label className="contact-form-tag">Email</label>
                        <input type="email" name="email" className='contact-form-input' placeholder='Isikan emailmu...' />
                    </div>
                    <div className="contact-form-div contact-form-area">
                        <label className="contact-form-tag">Pesan</label>
                        <textarea name="pesan" cols="30" rows="10" className='contact-form-input' placeholder='Isi pesan yang ingin kamu sampaikan...'></textarea>
                    </div>

                    <button href="#contact" className='send-button button button-flex'>
                        Kirim Pesan
                        <HiOutlinePaperAirplane size={19} className='send-button-icon' />
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact