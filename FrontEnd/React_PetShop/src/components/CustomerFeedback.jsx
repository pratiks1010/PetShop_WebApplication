import React from 'react';

const CustomerFeedback = () => {
    const feedbacks = [
        {
            name: "John Doe",
            rating: 5,
            comment: "Great products and excellent service. My pets love the treats!",
        },
        {
            name: "Jane Smith",
            rating: 4,
            comment: "Good selection of toys for cats. My kitty enjoys them a lot.",
        },
        {
            name: "Sam Johnson",
            rating: 3,
            comment: "Average quality products. Could use more variety.",
        },
        {
            name: "Emily Brown",
            rating: 5,
            comment: "Outstanding customer support and fast delivery. Highly recommended!",
        },
    ];

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Customer Feedback</h2>
            <div className="row">
                {feedbacks.map((feedback, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{feedback.name}</h5>
                                <div className="d-flex align-items-center mb-2">
                                    <span className="text-muted">{feedback.rating} Stars</span>
                                    <div className="ms-auto">
                                        {Array.from({ length: feedback.rating }, (_, index) => (
                                            <i key={index} className="bi bi-star-fill text-warning"></i>
                                        ))}
                                    </div>
                                </div>
                                <p className="card-text">{feedback.comment}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomerFeedback;
