import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mailicon from '../../assets/mail_icon.svg'
import locationicon from '../../assets/location_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "be57e0ed-ae47-479c-b480-de7fcbec422f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="logo" />
        </div>
        <div id="contact" className='contact-section'>
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects,so feel free to send me a message about anything that you want me to work on.You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail"><img src={mailicon} alt="icons" /><p>kurellamanasa204@gmail.com</p></div>
                    <div className="contact-detail"><img src={locationicon} alt="icons" /><p>Tirupati,Andhra Pradesh</p></div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your Name' name="name"/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name="email"/>
                <label htmlFor="">Write Your Message Here!</label>
                <textarea name="message" rows="8" placeholder='Enter Your Message...'></textarea>
                <button type="submit" className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact