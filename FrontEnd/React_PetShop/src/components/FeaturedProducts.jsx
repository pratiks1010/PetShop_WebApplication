import React from 'react';
import product1 from '../images/product-1.png';
import product2 from '../images/product-2.png';
import product3 from '../images/product-3.png';

const FeaturedProducts = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Featured Products</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img
                            src={product1}
                            className="card-img-top"
                            alt="Premium Dog Food"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Premium Dog Food</h5>
                            <p className="card-text">
                                Give your dog the best nutrition with our premium dog food.
                                Made with natural ingredients to keep your pet healthy and happy.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img
                            src={product2}
                            className="card-img-top"
                            alt="Cat Climbing Tree"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Cat Climbing Tree</h5>
                            <p className="card-text">
                                Keep your cat entertained and active with our stylish climbing tree.
                                It's designed to provide hours of fun and exercise for your feline friend.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img
                            src={product3}
                            className="card-img-top"
                            alt="Bird Cage Set"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Bird Cage Set</h5>
                            <p className="card-text">
                                Create a comfortable home for your feathered friend with our spacious bird cage set.
                                It comes with perches, feeding bowls, and plenty of room for your bird to fly and play.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProducts;
