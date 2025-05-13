import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const formElements = form.current.elements;
    const errors = {};
    let isValid = true;

    if (!formElements.name.value.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formElements.email.value.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formElements.email.value)) {
      errors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!formElements.subject.value.trim()) {
      errors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formElements.message.value.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        'service_kx5b6da', // Replace with your EmailJS service ID
        'template_r7mj0m8', // Replace with your EmailJS template ID
        form.current,
        {
          publicKey: 'N8Bl8qdbihPTkUsez', // Replace with your EmailJS public key
        }
      )
      .then(
        () => {
          toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 1000, // 1 second
          });
          form.current.reset();
          setErrors({});
        },
        () => {
          toast.error('Failed to send message. Try again later.', {
            position: 'top-right',
            autoClose: 1000, // 1 second
          });
        }
      );
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '1240px', display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '600' }}>Let’s Connect</h2>
       
          <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '48%', marginBottom: '15px' }}>
                <input
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: errors.name ? '1px solid red' : '1px solid #ccc',
                    borderRadius: '5px',
                  }}
                  placeholder="Name"
                  name="name"
                  aria-describedby="name-error"
                />
                {errors.name && (
                  <p id="name-error" style={{ color: 'red', fontSize: '0.875rem' }}>
                    {errors.name}
                  </p>
                )}
              </div>
              <div style={{ width: '48%', marginBottom: '15px' }}>
                <input
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: errors.email ? '1px solid red' : '1px solid #ccc',
                    borderRadius: '5px',
                  }}
                  placeholder="Email"
                  name="email"
                  aria-describedby="email-error"
                />
                {errors.email && (
                  <p id="email-error" style={{ color: 'red', fontSize: '0.875rem' }}>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <input
                style={{
                  width: '100%',
                  padding: '10px',
                  border: errors.subject ? '1px solid red' : '1px solid #ccc',
                  borderRadius: '5px',
                }}
                placeholder="Subject"
                name="subject"
                aria-describedby="subject-error"
              />
              {errors.subject && (
                <p id="subject-error" style={{ color: 'red', fontSize: '0.875rem' }}>
                  {errors.subject}
                </p>
              )}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <textarea
                rows="4"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: errors.message ? '1px solid red' : '1px solid #ccc',
                  borderRadius: '5px',
                }}
                placeholder="Message"
                name="message"
                aria-describedby="message-error"
              ></textarea>
              {errors.message && (
                <p id="message-error" style={{ color: 'red', fontSize: '0.875rem' }}>
                  {errors.message}
                </p>
              )}
            </div>
            <input
              type="submit"
              style={{
                backgroundColor: '#DDBE7B',
                color: '',
                padding: '0px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '2rem',
                cursor: 'pointer',
              }}
              value="Send"
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
