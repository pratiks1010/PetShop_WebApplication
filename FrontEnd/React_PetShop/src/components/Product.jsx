import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductAction, getAllProductAction } from "../actions/ProductActions";

const ProductDetails = () => {
    const dispatch = useDispatch();

    // validating user
    const navigate = useNavigate();
    const user = useSelector((state) => state.login.user);

    // dispatch action to get products at the time of page loading
    useEffect(() => {
        if(user.userId !== 0 && user.userType !== "ADMIN"){
            return navigate('/unauth');
        } else if (user.userId === 0){
            return navigate('/login');
        }

        dispatch(getAllProductAction());
    }, [dispatch, navigate, user.userId, user.userType]
    );

    // Get product details from store
    const products = useSelector((state) => state.fakeproducts.products);

    const deleteProduct = (productId) => {
        console.log(productId);
        const confirmation = window.confirm("Are you sure you want to delete a product?");
        if (confirmation === true) {
            dispatch(deleteProductAction(productId));
            window.location.reload(false);
        }
    };

    return (
        <div className="w-75 mx-auto mt-5">
            <h3 style={{ fontFamily: 'cursive' }}>Product List</h3>
            <Link to='/products/add' type="button" className="btn btn-outline-success  mb-3">
                <i className="bi bi-plus-circle-fill"></i> Add Product
            </Link>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="bg-primary text-light">
                        <tr>
                            <th>#</th>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Product Cost</th>
                            <th>Product Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { products?.map((m, index) => (
                            <tr key={m.productId}>
                                <td>{index + 1}</td>
                                <td>{m.productId}</td>
                                <td>{m.productName}</td>
                                <td>{m.productCost} ₹</td>
                                <td>{m.productCategory}</td>
                                <td>
                                    <Link to={`/products/update/${m.productId}`} type="button">
                                        <i className="bi bi-pen text-success me-3"></i>
                                    </Link>
                                    <Link to={`/products/view/${m.productId}`} type="button">
                                        <i className="bi bi-eye text-primary me-3"></i>
                                    </Link>
                                    <i className="bi bi-trash3-fill text-danger me-2"
                                        type="button"
                                        onClick={() => deleteProduct(m.productId)}>
                                    </i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductDetails;