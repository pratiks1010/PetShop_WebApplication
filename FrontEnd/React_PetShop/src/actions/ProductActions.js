import axios from "axios";

// Get all product action
export const getAllProductAction = () => async (dispatch) => {
  const response = await axios.get("http://localhost:8000/products/show");

  dispatch({
    type: "GET_PRODUCTS",
    payload: response.data,
  });
};

// Get product by id action
export const getProductByIdAction = (id) => async (dispatch) => {
  const response = await axios.get(`http://localhost:8000/products/view/${id}`);

  dispatch({
    type: "GET_PRODUCT",
    payload: response.data,
  });
};

// Add a product action
export const addProductAction = (product) => async (dispatch) => {
  const response = await axios.post("http://localhost:8000/products/add", product);

  dispatch({
    type: "ADD_PRODUCT",
    payload: response.data,
  });
};

// Delete a product by id action
export const deleteProductAction = (id) => async (dispatch) => {
  const response = await axios.delete(`http://localhost:8000/products/remove/${id}`);

  dispatch({
    type: "DELETE_PRODUCT",
    payload: response.data,
  });
};

// Update a product action
export const updateProductAction = (product) => async (dispatch) => {
  const response = await axios.put("http://localhost:8000/products/update", product);

  dispatch({
    type: "UPDATE_PRODUCT",
    payload: response.data,
  });
};