import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className='contacts'>
                <div className='contact-details'>
                    <div>
                        <h4>Get in Touch</h4>
                        <p className='descipt'>
                            Feel free to contact us <br />
                            through our different platforms<br />
                            and get to speak and enquire about<br /> our
                            fine institute
                        </p >
                    </div>
                    <ul>
                        <li className='detail'>Email : <span>ashlyndlovu445@gmail.com</span></li>
                        <li className='detail'>Phone : <span>ashlyndlovu445@gmail.com</span></li>
                        <li className='detail'>X : <span>@falcontech </span></li>
                        <li className='detail'>facbook: <span>ashlyndlovu445@gmail.com</span></li>

                    </ul>
                </div>
                <div className='form'>
                    <form>
                        <div className='input'>
                            <label>You Name</label>
                            <input type='text' id='name' placeholder='eg.Ashly' />
                        </div>
                        <div className='input'>
                            <label>Email</label>
                            <input type='email' id='name' placeholder='eg.@falcon..' />
                        </div>
                        <div className='input'>
                            <label>suggestion</label>
                            <textarea type='email' id='name' placeholder='eg.@falcon..' rows={'6'}></textarea>
                            <button className='send '>Send</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact