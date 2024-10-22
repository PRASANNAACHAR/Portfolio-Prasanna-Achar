
import React, { useState } from 'react';
import './Hero.css';
import profilePic from '../../assets/profile_pic.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume_new from '../../assets/resume_new.pdf'

const Hero = () => {
  const [resume, setResume] = useState(null);

  const loadResume = async () => {
    const response = await fetch(resume_new);
    const blob = await response.blob();
    setResume(blob);
  }

  return (
    <div id='home' className='hero'>
      <img src={profilePic} alt="Prasanna Achar" />
      <h1>
        I am <span>Prasanna Achar</span>, <br />
        Frontend Developer in India.
      </h1>
      <p>A web developer is a professional who designs, creates, and maintains websites. They are responsible for the visual appearance, functionality, and technical aspects of a website, such as site speed and traffic handling.  </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={loadResume}>
          <a download href={resume_new}>My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero;
