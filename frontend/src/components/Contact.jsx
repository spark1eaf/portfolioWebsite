import { forwardRef, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import * as Constants from "../constants/constants";
import emailjs from '@emailjs/browser';

const Contact = ({}, ref) =>{
    const [name, setName] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    const [email, setEmail] = useState();
    const form = useRef();

    const handleNameChange = event =>{
        setName(event.target.value);
    }
    const handleSubjectChange = event =>{
        setSubject(event.target.value);
    }

    const handleMessageChange = event =>{
        setMessage(event.target.value);
    }

    const handleEmailChange = event =>{
        setEmail(event.target.value);
    }

    const sendEmail = event => {
        event.preventDefault();
    
        emailjs.sendForm(Constants.SERVICE_ID, Constants.TEMPLATE_ID, form.current, {
            publicKey: Constants.PUBLIC_KEY,
        })
        .then(() => {
            console.log('Email sent');
            },
            error => {
              console.log('Failed to send email...', error.text);
            },
        );
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    };

    return(
    <div ref={ref} className={Constants.CONTACT_CLASS}>
        <SectionTitle title={Constants.CONTACT_TITLE}/>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" className="contact-name" onChange={handleNameChange} placeholder="Name" name="name" value={name} required/>
            <input type="email" className="contact-name" onChange={handleEmailChange} placeholder="Your Email" name="email" value={email} required/>
            <input type="text" className="contact-subject" onChange={handleSubjectChange} placeholder="Subject" name="subject" value={subject} required/>
            <textarea className="contact-message" onChange={handleMessageChange} placeholder="Email Message" name="message" value={message} required></textarea>
            <button type="submit" className="submit-btn">Submit</button>
        </form>
    </div>
    )
}

export default forwardRef(Contact);