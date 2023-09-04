import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getAllOrdersAction } from '../actions/OrderActions';
import { getAllProductAction } from '../actions/ProductActions';
import { getAllUsersAction } from '../actions/UserActions';
import { getAllCustomersAction } from '../actions/CustomerActions';

const Footer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllOrdersAction());
        dispatch(getAllProductAction());
        dispatch(getAllUsersAction());
        dispatch(getAllCustomersAction());
    }, [dispatch]);

    return (
        <footer className="bg-dark text-white mt-5">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Pet Paradise</h5>
                        <p>Your ultimate destination for all things pet-related. We offer a wide range of pet products and services to keep your furry friends happy and healthy.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>If you have any questions or inquiries, feel free to reach out to our customer support.</p>
                        <p>Email: support@petparadise.com</p>
                        <p>Phone: 123-456-7890</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Connect with Us</h5>
                        <p>Stay updated on our latest offers, news, and adorable pet photos through our social media channels.</p>
                        <div className="social-icons">
                            <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-white me-2"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="text-white me-2"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © {(new Date().getFullYear())} Made with <i className="bi bi-heart-fill"></i> by
                <Link className="text-white ms-2 text-decoration-none" to="/">Pet Paradise</Link>
            </div>
        </footer>
    );
}

export default Footer;
