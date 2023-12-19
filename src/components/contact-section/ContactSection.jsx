import React from 'react'
import Form from './Form'
import Info from './Info'

// Importing the styles for the ContactSection component
import './contact-section.css'

// ContactSection component combining Form and Info components
const ContactSection = () => (
  <>
    {/* Wrapper div with a class of "contact-section" */}
    <div className="contact-section">
      {/* Render the Form component for user input */}
      <Form />

      {/* Render the Info component for displaying contact information */}
      <Info />
    </div>
  </>
)

export default ContactSection
