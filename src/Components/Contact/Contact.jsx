import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1e65dd53-7dc9-4358-a369-b47a03257a43");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="Message Icon" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below.</p>
                <ul>
                    <li><img src={mail_icon} alt="Mail Icon" /> makautanimeclub@gmail.com</li>
                    <li><img src={phone_icon} alt="Phone Icon" /> +91-9434263608</li>
                    <li><img src={phone_icon} alt="Phone Icon" /> +91-8436444331</li>
                    <li><img src={location_icon} alt="Location Icon" /> ADDRESS OF MAKAUT</li>
                </ul>
                {/* Embed Google Map */}
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1836.9007653163096!2d88.5427919!3d22.9575353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bf8b4467fff7%3A0xb7992512444ab73!2sAcademic%20building%20(MAKAUT)!5e0!3m2!1sen!2sin!4v1724588002194!5m2!1sen!2sin"
                        width="100%"  // Makes iframe responsive
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    />
                </div>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" placeholder='Enter Your Mobile No.' required />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name='email' placeholder='Enter Your Email' required />
                    <label htmlFor="message">Write Your Message Here</label>
                    <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
                    <button type='submit' className='btn'>Submit Now!</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
}

export default Contact;
