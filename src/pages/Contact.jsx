import React from 'react';
import "./contact.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt,faPhoneAlt,faMailBulk} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

function Contact() {

    const sendMail=(e)=>{
        e.preventDefault();

    emailjs.sendForm('service_embxkfx', 'template_7l489y9', e.target, 'user_sYPcLSKypU5q0hM4VSqQG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    return (
        <div id="contact">

            <div className="contact_page container">
                <h2 className="contactme">contact me</h2>
                <div className="row ">

                    <div className="col-lg-6 col-md-12 ">

                        <h4 className="contactDetails">details</h4>
                        <div className="discriptions">
                            <p>I am heshan duminda fernando. i'm Undergraduate in BSc IT at the Rajarata University of Sri Lanka.if you wont to contant me use follow details or send a mail to me </p>
                        </div>

                        <div className="address">
                            <p>
                                <FontAwesomeIcon icon={faMapMarkedAlt} className="fa-2x"/><br />
                                No. 32/10,<br />
                                Church Road <br />
                                Eldaniya <br />
                                Kadawatha.
                            </p>
                        </div>
                        <div className="phoneNumber">
                            <FontAwesomeIcon icon={faPhoneAlt} className="fa-2x"/>
                            <p>0714377030</p>
                        </div>
                        <div className="email">
                            <FontAwesomeIcon icon={faMailBulk} className="fa-2x"/>
                            <p>heshanfer96@gmail.com</p>
                        </div>
                    </div>


                    <div className="col-lg-6 col-md-12 ">
                        <h4 className="contactMail">send mail</h4>
                        <form onSubmit={sendMail}>
                            <input type="text" placeholder="Name" name="name" />
                            
                            <input type="text" placeholder='Enter Subject'  name="subject"/>
                            
                            <input type="email" placeholder='Email' name="email" />

                            <input type="number" placeholder='Contact Number' name="contact"/>

                            
                            <textarea id="" cols="30" rows="5" placeholder="Discription" name="message"></textarea>

                            <button className="formSubmit">Submit</button>

                        </form>
                    </div>
                </div>
                
            </div>
        
        </div>
    )
}

export default Contact
