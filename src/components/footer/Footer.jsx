import React from 'react'
import './footer.css'

// Footer component displaying copyright information
const Footer = () => (
  <div className="footer">
    {/* Paragraph displaying copyright information with the current year */}
    <p className="footer-copyright">
      &copy; Sample Inc. {new Date().getFullYear()}
    </p>
  </div>
)

export default Footer
