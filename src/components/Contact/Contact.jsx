import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="padding innerWidth flexCenter c-container">
            <div className="c-left">
                <span>Our Contact</span>
                <span>Easy to Contact us</span>
                <span>We are always ready to help by providing the best services for you.
                We believe a good place to live can make your life better.</span>
            </div>
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact