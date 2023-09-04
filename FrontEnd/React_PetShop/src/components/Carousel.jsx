import React, { Component } from 'react';
import slider1 from '../images/slider-1.jpg';
import slider2 from '../images/slider-2.jpg';
import slider3 from '../images/slider-3.png';
import FeaturedProducts from './FeaturedProducts';
import PetShopBlog from './PetShopBlog';

import Shop from './Shop';



class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleCaptions" className="carousel slide m-5 rounded shadow-lg" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ maxHeight: '750px' }} src={slider3} className="d-block w-100 img-fluid" alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-light px-3 rounded text-dark" style={{ margin: '100px' }}>
                            <h3>Your One-Stop Pet Shop</h3>
                            <p>We provide everything your furry friends need for a joyful and healthy life.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img style={{ maxHeight: '750px' }} src={slider2} className="d-block w-100 img-fluid" alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-light px-3 rounded text-dark" style={{ margin: '100px' }}>
                            <h3>Unconditional Love and Joy</h3>
                            <p>Find your perfect companion and experience the magic of pet ownership.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img style={{ maxHeight: '750px' }} src={slider1} className="d-block w-100 img-fluid" alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-light px-3 rounded text-dark" style={{ margin: '100px' }}>
                            <h3>Happy Pets, Happy Lives</h3>
                            <p>Discover a world of pet products and services that make life better for you and your pets.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <Shop></Shop>
                <FeaturedProducts></FeaturedProducts>
                <PetShopBlog></PetShopBlog>
        
                
            </div>
        );
    }
}

export default Carousel;
