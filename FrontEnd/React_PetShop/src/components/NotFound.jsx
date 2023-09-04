import React from "react";
import { Link } from "react-router-dom";
import notfound from "../images/404-error.png";

const NotFound = () => {

    const containerStyle = {
        textAlign: 'center',
        marginTop: '50px',
    };

    const imageStyle = {
        maxWidth: '300px',
        marginBottom: '30px',
    };

    const headingStyle = {
        fontSize: '28px',
        color: '#333',
        marginBottom: '20px',
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: '16px',
    };

    return (
        <div style={containerStyle}>
            <img className="img-fluid" src={notfound} alt="404 Not Found" style={imageStyle}/>
            <h1 style={headingStyle}>Oops! The page you are looking for is not found</h1>
            <p>We apologize for any inconvenience. Please navigate back to the home page.</p>
            <Link to='/' style={buttonStyle}>
                <i className="bi bi-house-fill"></i> Home
            </Link>
        </div>
    );
};

export default NotFound;
