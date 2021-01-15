import React from 'react';
import './About.css';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaUikit } from 'react-icons/fa';
import { FaNetworkWired } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
import { FaCube } from 'react-icons/fa';





const About = () => {
    
    
    return (
     <div className='aboutMePage'>

         <div className='about-main'>


         <div className='about-me'> 
         

            <p> Hi, my name is Konrad. About a year ago I decided to become a frontend developer.
                The year passed quickly, meanwhile the coronavirus pandemic broke out,
                I finished my studies in economics and was still learning to be closer to my goal of becoming a web developer.
                Here you can see the technologies I use, but I am constantly trying to expand the scope of my knowledge.
                If you want to get in touch, you can find me in the contact tab. </p>
         
      
         </div>


         <div className='about-tech' >
            <div className='rect'><FaHtml5/><h2>HTML</h2></div>
            <div className='rect'><FaCss3Alt/><h2>CSS</h2></div>
            <div className='rect'><FaJsSquare/><h2>JAVASCRIPT</h2></div>
            <div className='rect'><FaMobileAlt/><h2>RWD</h2></div>
            <div className='rect'><FaReact/><h2>REACT</h2></div>
            <div className='rect'><FaUikit/><h2>UI DESIGN</h2></div>
            <div className='rect'><FaNetworkWired/><h2>API</h2></div>
            <div className='rect'><FaPen/><h2>CREATIVITY</h2></div>
            <div className='rect'><FaCube/><h2>DESIGN</h2></div>
         </div>

         
         
         
         
         
         </div>
      </div>
    );
}








export default About;