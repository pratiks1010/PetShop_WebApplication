import React, { useState } from 'react';


function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Implement form submission logic
    };

    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
        textAlign: 'center'
    };

    const headingStyle = {
        fontSize: '28px',
        marginBottom: '20px',
        color: '#333'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px'
    };

    const textareaStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px'
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#ff6b6b',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        fontSize: '18px',
        cursor: 'pointer'
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        style={inputStyle}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        style={inputStyle}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        style={textareaStyle}
                        required
                    />
                </div>
                <button type="submit" style={buttonStyle}>Submit</button>
            </form>
            <p style={{ fontSize: '16px', marginTop: '20px' }}>
                Feel free to reach out to us with any questions, concerns, or feedback.
                We're here to assist you!
            </p>
          
        </div>
    );
}

export default ContactUs;
