import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import prasanna_png from '../../assets/prasanna_png.png'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={prasanna_png} alt="" /> 
              {/* chnage profile img to my img after */}
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a web developer with a Good understanding of HTML and CSS, which are essential for creating and styling web content. My JavaScript, ReactJS knowledge is still developing, which are important for creating dynamic and interactive web elements. </p>
                <p>With continued learning and practice,i can improve my skills and become a well-rounded web developer.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Css</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"5%"}} /></div>
                <div className="about-skill"><p>React js</p><hr style={{width:"5%"}} /></div>
            </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Years Of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>Happy Clients</p>
        </div>
      </div> */}
    </div>
  )
}

export default About
