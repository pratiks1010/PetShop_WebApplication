import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addOrderAction } from '../actions/OrderActions';
import { useSelector, useDispatch } from "react-redux";
import { getAllProductAction } from '../actions/ProductActions';
import OrderPlacedSuccess from './OrderPlacedSuccess'; // Import the new component
import img from '../images/tracking.png';

const BuyNow = () => {
    // to get current date and dispatch date
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 3);
    var orderDate = new Date();

    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // to get the customer id to place order
    const user = useSelector((state) => state.login.user);

    // get medicine information to show order total
    var products = useSelector((state) => state.fakeproducts.products);
    const product = products.filter((m) => m.productId === parseInt(params.productId));

    useEffect(() => {
        if (user.userId !== 0 && user.userType !== "CUSTOMER") {
            return navigate('/unauth');
        } else if (user.userId === 0) {
            return navigate('/login');
        }

        dispatch(getAllProductAction());
    }, [dispatch, navigate, user.userId, user.userType]);

    const [order] = useState({
        orderDate: orderDate.toISOString().split('T')[0],
        dispatchDate: currentDate.toISOString().split('T')[0],
        totalCost: product[0]?.productCost,
        products: [{
            productId: params.productId
        }],
        customer: {
            customerId: user.customer.customerId
        }
    });

    const [isOrderPlaced, setIsOrderPlaced] = useState(false); // Track order placement status

    const placeOrder = (event) => {
        event.preventDefault();
        dispatch(addOrderAction(order));
        setIsOrderPlaced(true); // Set order placement status to true
    }

    return (
        <div>
            {isOrderPlaced ? ( // Conditionally render OrderPlacedSuccess component
                <OrderPlacedSuccess />
            ) : (
                <form className="col-lg-4 mx-auto mt-5 bg-light p-5 rounded shadow" onSubmit={placeOrder}>
                    <div className="form-group">
                        <img src={img} alt="" className="img-fluid w-50" />
                    </div>
                    <div className="form-group mt-3">
                        <h3 style={{ fontFamily: 'cursive' }}>Order Details</h3>
                        <hr />
                        <p>Order Item : {product[0]?.productName}</p>
                        <h5>Order Total : {product[0]?.productCost} ₹</h5>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" className="form-input me-2" id="cash" required />
                        <label className="form-check-label" htmlFor="cash">Pay By Cash</label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Place Order</button>
                </form>
            )}
        </div>
    );
}

export default BuyNow;
