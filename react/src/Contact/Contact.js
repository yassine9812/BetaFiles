import React from "react";
import { useRef } from "react";
import Contactcss from "./Contact.module.css";
import emailjs from '@emailjs/browser';
const Contact = () =>{
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vykwvyg', 'template_2o1qg9h', form.current, 'jw27_QZP-04jBm4Ji')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <div className={Contactcss.container}>  
                <h2 className={Contactcss.pos}>Contact Us </h2>
            <form ref={form} onSubmit={sendEmail} >
                <input className={Contactcss.inputName}  type="text"
                placeholder="Full Name"
                name="User_name" required/>

                <input className={Contactcss.inputMail} type="email"
                placeholder="Email"
                name="User_email" required/>

                <textarea className={Contactcss.MessageArea} name="message" cols="30" rows="10" placeholder=" write your message" >
                </textarea>
                <button className={Contactcss.btn}  type="submit">Send</button>

            </form>
           
        </div>
    )
}
export default Contact;
 