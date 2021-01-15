import React from 'react';
import './Contact.css';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGitSquare } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';



const Contact = () => {

    return (
        <div className='contactpage'>
            <div className='contact-main'>
                <a href='https://www.instagram.com/but_that_backflip_tho' target='blank'><h1><FaInstagramSquare/><a>Instagram</a></h1></a>
                <a href='https://pl.linkedin.com/in/konrad-p%C5%82onka-b05a30134' target='blank'><h1><FaLinkedin/><a>LinkedIn</a></h1></a>
                <a href='https://github.com/PlonkaKonrad' target='blank'><h1><FaGitSquare/><a>Github</a></h1></a>
                <h1><FaEnvelope/><a>konrad66a4@gmail.com</a></h1>


            </div>
        </div>
       );
   }










export default Contact;