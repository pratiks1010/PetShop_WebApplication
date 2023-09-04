import React from 'react';

const About = () => {
    const aboutStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(to bottom, #f4f4f4, #ffffff)',
        textAlign: 'center'
    };

    const headingStyle = {
        fontSize: '28px',
        color: '#333',
        marginBottom: '10px'
    };

    const textStyle = {
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#555',
        marginBottom: '15px'
    };

    const contactStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginTop: '20px'
    };

    const linkStyle = {
        color: '#007bff',
        textDecoration: 'none'
    };

    return (
        <div style={aboutStyle} className="container mt-5">
            <h2 style={headingStyle}>About Us</h2>
            <p style={textStyle}>Welcome to <span style={{ color: '#ff6b6b', fontWeight: 'bold' }}>Pet Paradise</span>! We're your go-to destination for all things pet-related.</p>
            <p style={textStyle}>Our Mission:</p>
            <p style={textStyle}>At <span style={{ color: '#ff6b6b', fontWeight: 'bold' }}>Pet Paradise</span>, we're on a mission to enhance the lives of pets and their owners. We believe in the unconditional love that pets bring to our lives, and we're dedicated to providing the best products, services, and advice to ensure they lead happy, healthy, and fulfilling lives.</p>
            <p style={textStyle}>Our Commitment:</p>
            <p style={textStyle}>From high-quality pet food and supplies to expert grooming and healthcare services, we offer a comprehensive range of products and services to cater to all your pet's needs. Our team of passionate pet lovers is here to assist you every step of the way.</p>
            <div style={contactStyle}>
                <p>If you have any questions, suggestions, or inquiries, don't hesitate to get in touch with us:</p>
                <p>Email: <a style={linkStyle} href="mailto:info@petparadise.com">info@petparadise.com</a></p>
                <p>Phone: 123-456-7890</p>
                <p>Join us in creating a paradise for your beloved furry, feathered, or scaly family members!</p>
            </div>
        </div>
    );
};

export default About;
