const initialState = {
  products: [],
  product: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    case "GET_PRODUCT":
      return { ...state, product: action.payload };

    case "ADD_PRODUCT":
      return { ...state, products: [...products, action.payload] };

    case "DELETE_PRODUCT":
      const products = state.products.filter((m) => m.id !== action.payload.id);
      return { ...state, products: products };

    case "UPDATE_PRODUCT":
      return state.products.map((m) =>
        m.id === action.payload.id ? action.payload : m
      );

    default:
      return state;
  }
};

export default productReducer;