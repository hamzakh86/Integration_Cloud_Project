import React from 'react'
import { InlineIcon } from '@iconify/react';
import './info.css'

// Array containing contact details
const contactDetails = [
  {
    value: 'P 1, Sousse, Tunisia',
    // Note: 'icon' property is missing in the contactDetails array
  },
  { value: '+216 25178855' },
  { value: 'support@example.com' },
]

// Function to render contact details
const renderContactDetails = () =>
  contactDetails.map(detail => (
    <p key={detail.value} className="info-detail">
      {/* Icon (specified by 'icon' property) from the @iconify/react library */}
      <InlineIcon icon={detail.icon} /> {detail.value}
    </p>
  ))

// Info component displaying contact information
const Info = () => (
  <section className="info">
    {/* Heading for the contact information section */}
    <h2 className="info-h2">Contact information</h2>

    {/* Container for displaying contact details */}
    <div className="info-details-container">{renderContactDetails()}</div>

    {/* Container for displaying icons (commented out) */}
    <div className="info-icons-container">
      {/* Render icons commented */}
    </div>
  </section>
)

export default Info
