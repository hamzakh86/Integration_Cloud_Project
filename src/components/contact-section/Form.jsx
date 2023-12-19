import React from 'react'
import './form.css'

// Array containing form input details
const formInputs = [
  { id: 'name', type: 'text', label: 'Your name', placeholder: 'Foulan Flani' },
  {
    id: 'tel',
    type: 'tel',
    label: 'Phone number',
    placeholder: '+216 00000000',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'you@example.com',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Your message',
    placeholder: 'How can we help you? Or you us?',
  },
]

// Form component displaying a form with input fields
const Form = () => (
  <form className="form">
    {/* Heading for the form */}
    <h2 className="form-h2">Send us a message</h2>

    {/* Mapping through the formInputs array to render input fields */}
    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {/* Label for the input field */}
        {input.label}

        {/* Render either a text input or a textarea based on the input type */}
        {input.type === 'textarea' ? (
          <textarea className="form-textarea" placeholder={input.placeholder} />
        ) : (
          <input
            className="form-input"
            type={input.type}
            placeholder={input.placeholder}
          />
        )}
      </label>
    ))}
  </form>
)

export default Form
