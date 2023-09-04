import React from 'react';
import img from '../images/success.png';

const OrderPlacedSuccess = () => {
    return (
        <div className="col-lg-4 mx-auto mt-5 bg-light p-5 rounded shadow text-center">
            <div className="form-group">
                <img src={img} alt="Success" className="img-fluid w-50" />
            </div>
            <h2>Payment Done Successfully!</h2>
            <p>Your order processed successfully.</p>
            <p>Thank you for shopping with us!</p>
        </div>
    );
}

export default OrderPlacedSuccess;
