import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { MdChatBubble } from 'react-icons/md';
const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="padding innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contact</span>
                <span className='primaryText'>Easy to Contact us</span>
                <span className='secondaryText'>We are always ready to help by providing the best services for you.
                We believe a good place to live can make your life better.</span>

                <div className="flexStart contactModes">
                    {/* first Row */}
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexColStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>+251 905 582 005</span>
                                    </div>        
                                </div>
                                <div className="button flexCenter ">Call Now</div>
                            </div>
                        </div>
                        {/* second one */}

                        <div className="flexColCenter mode">
                            <div className="flexColStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>+251 905 582 005</span>
                                    </div>        
                                </div>
                                <div className="button flexCenter ">Chat Now</div>
                            </div>
                        </div>
                    </div>
                    {/* secondery row */}
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexColStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>+251 905 582 005</span>
                                    </div>        
                                </div>
                                <div className="button flexCenter ">Video Call Now</div>
                            </div>
                        </div>
                        {/* second one */}

                        <div className="flexColCenter mode">
                            <div className="flexColStart">
                                <div className="flexCenter icon">
                                    <MdChatBubble size={25}/>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>+251 905 582 005</span>
                                    </div>        
                                </div>
                                <div className="button flexCenter ">Message Now</div>
                            </div>
                        </div>
                    </div>
                </div>
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