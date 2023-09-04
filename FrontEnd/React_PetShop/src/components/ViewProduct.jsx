import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductByIdAction } from '../actions/ProductActions';
import dimg from '../images/petlogo6.png';

const ViewProduct = () => {
    const params = useParams();
    const dispatch = useDispatch();

    // validating user
    const navigate = useNavigate();
    const user = useSelector((state) => state.login.user);

    useEffect(() => {
        if(user.userId !== 0 && user.userType !== "ADMIN"){
            return navigate('/unauth');
        } else if (user.userId === 0){
            return navigate('/login');
        }

        dispatch(getProductByIdAction(params.productId));
    });

    // Get product details from store
    var getProduct = useSelector((state) => state.fakeproducts.product);

    return (
        <div className="card my-5 col-lg-4 col-10 col-sm-8 col-md-8 mx-auto rounded border border-success shadow">
            <img className="card-img-top w-50 p-3 mx-auto" src={dimg} alt=""/>
                <div className="card-body">
                    <h5 className="card-title fst-italic">{ getProduct?.productName }</h5>
                    <h3 className="text-danger">{ getProduct?.productCost } <span className='fs-1'>₹</span></h3>

                    <hr/>
                    
                    <hr/>
                    <p className="card-text">A { getProduct?.category ? getProduct.category.categoryName : "Product" } by { getProduct?.companyName }</p>
                    <Link to='/products' type="button" className="btn btn-primary m-2">
                        <i className="bi bi-arrow-return-left"></i> Go Back
                    </Link>
                    <Link to={`/products/update/${getProduct?.productId}`} type="button" className="btn btn-warning m-2">
                        <i className="bi bi-pencil-fill"></i> Update
                    </Link>
                </div>
        </div>
    );
}

export default ViewProduct;