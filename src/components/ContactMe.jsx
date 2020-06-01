import React from 'react';
import { GitHub, MailOutline, Facebook, LinkedIn, Phone } from '@material-ui/icons';



export default function Contact() {

        
    return (
        <section id="Contact">
            <div className="container center">
                <div className="head">
                    <h1 className="headContainer">let's work together<span className="dot">.</span>
                    </h1>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
          


                <div className="row">
                    <div class="col-lg-6 col-md-6col-sm-12">
                        <div className="contact">
                            <p><MailOutline fontSize="large" />  kimxdalusong@gmail.com</p>
                            <p><Phone fontSize="large" />  +63 955 092 3880 </p>
                            <p><GitHub fontSize="large" />  kimdalusong </p>
                            <p><a href="https://m.me/thekimxdalusong" target="_blank" className="contact-link"><Facebook fontSize="large" />  m.me/thekimxdalusong </a></p>
                            <p><a href="https://www.linkedin.com/in/jasperdalusong" target="_blank" className="contact-link"><LinkedIn fontSize="large" />  www.linkedin.com/in/jasperdalusong </a> </p>
                        </div>

                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13420.523911501203!2d120.97486027222111!3d15.490870200535763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33972927a9b9b4e5%3A0x3602728102670a69!2sCabanatuan!5e0!3m2!1sen!2sph!4v1590850172432!5m2!1sen!2sph" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    
                     </div>
                </div>
            <br/>
            <br/>
            
            </div>
        </section>
    );

}

