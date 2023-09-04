import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Joi from "joi-browser";
import { useDispatch, useSelector } from "react-redux";
import { updateProductAction, getProductByIdAction } from "../actions/ProductActions";

const UpdateProduct = () => {
    const params = useParams();
    const dispatch = useDispatch();

    // validating user
    const navigate = useNavigate();
    const user = useSelector((state) => state.login.user);
    const allProducts = useSelector((state) => state.fakeproducts.products);

    const filteredProduct = allProducts.filter(m => { return (m.productId === parseInt(params.productId)) });
    const productToUpdate = filteredProduct[0];

    // initialize the state
    const [product, setProduct] = useState({
        productName: "",
            productCost: "",
            discription : "",
            category: ""
        });
    

    const [errors, setErrors] = useState({});

    const schema = {
        productName: Joi.string().max(128).required(),
        productCost: Joi.number().min(1).required(),
        productDescription: Joi.string().required(),
        productCategory: Joi.string().required()
    }

    const validate = () => {
        const result = Joi.validate(product, schema, {
            abortEarly: false,
        });
        console.log(result);
        if (!result.error) return null;

        const errors = {};
        for (let item of result.error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    };

    useEffect(() => {
        if(user.userId !== 0 && user.userType !== "ADMIN"){
            return navigate('/unauth');
        } else if (user.userId === 0){
            return navigate('/login');
        }

        dispatch(getProductByIdAction(params.productId));
        setProduct(productToUpdate);
    }, []);

    const updateChange = (event) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        });
    };

    const updateCategory = (event) => {
        setProduct({
            ...product,
            category: {
                ...product.category,
                [event.target.name]: event.target.value
            }
        });
    }

    const updateProduct = (event) => {
        event.preventDefault();
        
        const errors = validate();
        // update state with errors after validation
        
        // setErrors({ errors: errors || {} });
        // console.log(errors);
        // if (errors) return;

        dispatch(updateProductAction(product));
        window.location.reload(false);
        alert("product updated successfully!");
        window.location.href = '/products';
    };

    return (
        <div
            style={{ marginLeft: "auto", marginRight: "auto" }}
            className="col-lg-4 col-10 col-sm-8 col-md-8 border p-4 mt-5 shadow"
            >
                <h3 style={{ fontFamily: 'cursive' }}>Update Product</h3>
                <form onSubmit={ updateProduct }>
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label float-start">
                        Product Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="productName"
                            defaultValue={product.productName}
                            name="productName"
                            onChange={ updateChange }
                        />
                        { errors && <small className="text-danger">{errors.productName}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productCost" className="form-label float-start">
                        Product Cost
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="productCost"
                            defaultValue={product.productCost}
                            name="productCost"
                            onChange={updateChange}
                        />
                        { errors && <small className="text-danger">{errors.productCost}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="companyName" className="form-label float-start">
                            Product Description
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="companyName"
                            defaultValue={product.companyName}
                            name="companyName"
                            onChange={updateChange}
                        />
                        {errors && <small className="text-danger">{errors.companyName}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="categoryId" className="form-label float-start">
                            Category Id
                        </label>
                        <input
                            className="form-control"
                            list="categoryList"
                            id="categoryId"
                            defaultValue={product.category ? product.category.categoryId : null}
                            name="categoryId"
                            onChange={updateCategory}
                        />
                        {errors && (<small className="text-danger">{errors.category}</small>) }
                        <datalist id="categoryList">
                            <option value="Food">Food</option>
                            <option value="Toys">Toys</option>
                            <option value="Accessories">Accessories</option>
                        </datalist>
                    </div>
                    <div className="d-grid gap-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <Link to='/products' type="button" className="btn btn-outline-dark">
                            <i className="bi bi-arrow-return-left"></i> Go Back
                        </Link>
                    </div>
                </form>
            </div>
    );
};

export default UpdateProduct;