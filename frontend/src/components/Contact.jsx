import { forwardRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import * as Constants from "../constants/constants";

const Contact = ({}, ref) =>{
    const [name, setName] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    const [email, setEmail] = useState();

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

    const sendEmail = ()=>{

    }

    return(
    <div ref={ref} className={Constants.CONTACT_CLASS}>
        <SectionTitle title={Constants.CONTACT_TITLE}/>
        <form onSubmit={sendEmail}>
            <input type="text" className="contact-name" onChange={handleNameChange} placeholder="Name" value={name} required/>
            <input type="email" className="contact-name" onChange={handleEmailChange} placeholder="Your Email" value={email} required/>
            <input type="text" className="contact-subject" onChange={handleSubjectChange} placeholder="Subject" value={subject} required/>
            <textarea className="contact-message" onChange={handleMessageChange} placeholder="Email Message" value={message} required></textarea>
            <button type="submit" className="submit-btn">Submit</button>
        </form>
    </div>
    )
}

export default forwardRef(Contact);