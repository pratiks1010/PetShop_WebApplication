import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Joi from 'joi-browser';
import { withRouter } from "./WithRouter";
import { connect } from "react-redux";

class AddProduct extends Component {
    state = {
        product: {
            productName: "",
            productCost: "",
            productDescription: "",
            productCategory: "",
            productBreed: ""
        },
        // form validation states
        errors: {},
        errMsg: "",
    }

    schema = {
        productName: Joi.string().max(128).required(),
        productCost: Joi.number().min(1).required(),
        productDescription: Joi.string().required(),
        productCategory: Joi.string().required(),
        productBreed: Joi.string().max(128)
    }

    componentDidMount() {
        if(this.props.login.user.userId !== 0 && this.props.login.user.userType !== "ADMIN"){
            return this.props.navigate('/unauth');
        } else if (this.props.login.user.userId === 0){
            return this.props.navigate('/login');
        }
    }

    validate = () => {
        const errors = {};
        const result = Joi.validate(this.state.product, this.schema, {
            abortEarly: false,
        });
        console.log(result);
        if (result.error !== null)
            for (let item of result.error.details) {
                errors[item.path[0]] = item.message;
            }
        return Object.keys(errors).length === 0 ? null : errors;
    };

    setProduct = (event) => {
        const newProduct = { ...this.state.product };
        newProduct[event.target.name] = event.target.value;
        this.setState({ product: newProduct });
    };

    addProduct = (event) => {
        event.preventDefault();

        axios
            .post("http://localhost:8000/products/add", this.state.product)
            .then((response) => {
                console.log(response.data);
                alert("Product added successfully!");
                this.props.history.push('/products');
            })
            .catch((err) => {
                console.log(err);
                this.setState({ errMsg: err.response.data.message });
            });
    };

    render() {
        const { errors, errMsg } = this.state;
        return (
            <div
                style={{ marginLeft: "auto", marginRight: "auto" }}
                className="col-lg-4 col-10 col-sm-8 col-md-8 border p-4 mt-5 shadow"
            >
                <h3 style={{ fontFamily: 'cursive' }}>Add Product</h3>
                {errMsg && (
                    <div className="alert alert-danger" role="alert">
                        {errMsg}
                    </div>
                )}
                <form onSubmit={this.addProduct}>
                    {/* ... (existing form fields) */}
                    <div className="mb-3">
                        <label htmlFor="productBreed" className="form-label float-start">
                            Product Breed
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="productBreed"
                            value={this.state.product.productBreed}
                            name="productBreed"
                            onChange={this.setProduct}
                        />
                        {errors.productBreed && <small className="text-danger">{errors.productBreed}</small>}
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
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
    };
};

export default connect(
    mapStateToProps
)(withRouter(AddProduct));
