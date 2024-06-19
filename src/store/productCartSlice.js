import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

// Products in the cart
const productCartSlice = createSlice({
  name: "productsCart",
  initialState: [],

  reducers: {
    // Add To Cart
    addToCart: (state, action) => {
      const newAddToCart = {
        description: action.payload.description,
        id: action.payload.id,
        img: action.payload.img,
        name: action.payload.name,
        price: action.payload.price,
      };
      Swal.fire({
        title: `£${action.payload.price} ${action.payload.name} added!`,
        icon: "success",
      });
      return [...state, newAddToCart];
    },

    // Delete Product
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },

    // Empty entire cart
    emptyCart: (state) => {
      // Product id doesn't exist so everything gets wiped out
      return state.filter((product) => product.id === "Clear everything out");
    },
  },
});

export const { addToCart, deleteProduct, emptyCart } = productCartSlice.actions;

export default productCartSlice.reducer;
