import { useState } from "react";

const Contact = () =>{
    const [name, setName] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    const [email, setEmail] = useState()

    const handleNameChange = event =>{
        setName(event.target.value)
    }
    const handleSubjectChange = event =>{
        setSubject(event.target.value)
    }

    const handleMessageChange = event =>{
        setMessage(event.target.value)
    }

    const handleEmailChange = event =>{
        setEmail(event.target.value)
    }

    const sendEmail = ()=>{

    }

    return(
    <div className="contact">
        <h1>Contact Me</h1>
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

export default Contact;