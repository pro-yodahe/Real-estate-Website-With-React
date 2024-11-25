import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* the left */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120}/>
                <span className='secondaryText'>
                    Our vision is to make all people the best place to live for them.
                </span>
            </div>

            <div className="flexColStart r-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>142 Ethiopian, FL 1000, USA</span>
                <div className="flexCenter f-menu">
                    <span>Peoperty</span>
                    <span>service</span>
                    <span>product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer