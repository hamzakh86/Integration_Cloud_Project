import React from 'react'
import './intro.css'

// Intro component representing the introductory section of the webpage
const Intro = () => (
  <div className="intro-container">
    {/* Heading displaying the mission statement */}
    <h2 className="intro-h2">Our Mission</h2>

    {/* Paragraph describing the mission */}
    <p className="intro-p">
      Every single person who understands the impact of the web should be an
      advocate and strive for a better, more inclusive web for all.
    </p>
  </div>
)

export default Intro
