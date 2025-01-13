import { ChangeEvent, FormEvent, forwardRef, useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import * as Constants from "../constants/constants";
import emailjs from '@emailjs/browser';

const Contact = forwardRef<HTMLHeadingElement>(({}, ref) =>{
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const form = useRef<HTMLFormElement>(null);
    const [sendEmailNotification, setSendEmailNotification] = useState<string|null>(null);

    const handleNameChange = (event:ChangeEvent<HTMLInputElement>) =>{
        setName(event.target.value);
    };

    const handleSubjectChange = (event:ChangeEvent<HTMLInputElement>) =>{
        setSubject(event.target.value);
    };

    const handleMessageChange = (event:ChangeEvent<HTMLTextAreaElement>) =>{
        setMessage(event.target.value);
    };

    const handleEmailChange = (event:ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value);
    };

    const sendEmail = (event:FormEvent) => {
        event.preventDefault();

        if(!form.current)
            console.log("form is null");
        else{
            emailjs.sendForm(Constants.SERVICE_ID, Constants.TEMPLATE_ID, form.current, {
                publicKey: Constants.PUBLIC_KEY,
            })
            .then(() => {
                console.log('Email sent');
                setSendEmailNotification(`Email Sent`)
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
                },
                error => {
                  console.log('Failed to send email...', error.text);
                  setSendEmailNotification(`Something went wrong. Please try again later.`)
                },
            );
        }
    };

    useEffect(() =>{
        if(sendEmailNotification)
            alert(sendEmailNotification);
    }, [sendEmailNotification]);

    return(
    <div className={Constants.CONTACT_CLASS}>
        <SectionTitle ref={ref} className={Constants.GENERIC_TITLE_CLASS}title={Constants.CONTACT_TITLE}/>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" className="contact-name" onChange={handleNameChange} placeholder="Name" name="name" value={name} required/>
            <input type="email" className="contact-name" onChange={handleEmailChange} placeholder="Email" name="email" value={email} required/>
            <input type="text" className="contact-subject" onChange={handleSubjectChange} placeholder="Subject" name="subject" value={subject} required/>
            <textarea className="contact-message" onChange={handleMessageChange} placeholder="Email Message" name="message" value={message} required></textarea>
            <button type="submit" className="submit-btn">Submit</button>
        </form>
    </div>
    );
});

export default Contact;