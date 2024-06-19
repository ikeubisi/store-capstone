import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

// Components & Store
import { emptyCart } from "../../store/productCartSlice";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import ShippingHelpInfo from "./ShippingHelpInfo";
import ShippingOptions from "./ShippingOptions";

// Cart page
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Grab products from store
  const productCart = useSelector((state) => state.productCart);

  // Show total price in cart
  let totalPrice = productCart.reduce((acc, item) => acc + item.price, 0);

  // Wipe out entire cart
  const handleEmptyCartClick = () => {
    dispatch(emptyCart());
    // Use Sweetalert2 for attractive looking popups
    Swal.fire({
      title: `Cart emptied out!`,
      icon: "info",
    });
    navigate("/products");
  };

  // Shipping Purchase Options
  const [shippingAddress, setShippingAddress] = useState("");

  // Shipping choice is based on price
  const handleShippingClick = (price) => {
    totalPrice += price;
    // Check an address has actually been entered in the input field
    if (shippingAddress.length > 5) {
      // Sweetalert2 learned from
      // How to use sweetalert2 in a react application | react and Sweet Alert (2023) YouTube.
      // Available at: https://www.youtube.com/watch?v=6sFSj6QQqL8 (Accessed: 19 October 2023).
      Swal.fire({
        title: `Total cost £${totalPrice}`,
        text: `Items shipped to: ${shippingAddress}`,
        icon: "success",
      });
      dispatch(emptyCart());
      navigate("/products");
    } else {
      Swal.fire({
        text: `Please enter a shipping address`,
        icon: "warning",
      });
    }
  };

  return (
    <>
      <h1>Products in Cart</h1>
      <hr />
      <div className="storeImageContainer">
        <img
          className="kitchenUtensils"
          src="data:image/jpeg;base64,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"
          alt="kitchen utensils"
          title="React Store Capstone Kitchen Utensils"
        />
      </div>
      <ShippingHelpInfo />
      <CartTotal />

      {/* If cart has no items in the array tell use the cart is empty and where to go */}
      {productCart.length === 0 && (
        <h5>
          There are no items in the cart, if you have logged in or registered
          please go to <Link to="/products">products</Link> to add some.
        </h5>
      )}

      <ul className="list-group">
        {productCart.map((product) => (
          <CartItem
            description={product.description}
            id={product.id}
            img={product.img}
            key={product.id}
            name={product.name}
            price={product.price}
          />
        )) || <h3>Loading ...</h3>}
      </ul>

      {/* Hide if no items in cart of this part is a waste of the user's time */}
      {productCart.length > 0 && (
        <>
          <button onClick={handleEmptyCartClick} className="btn btn-danger">
            Empty Cart
          </button>

          {/* Do not show buttons until an address has been entered */}
          {shippingAddress.length > 5 && (
            <>
              <ShippingOptions handleShippingClick={handleShippingClick} />
            </>
          )}

          <h5 className="mt-1">
            Please enter the shipping receiver name, building number, street,
            town and postcode.
          </h5>
          {/* Avoid using Formik & Yup for validation, gets too messy when dealing with state & using a form*/}
          <input
            id="shippingAddress"
            name="shippingAddress"
            type="text"
            placeholder="Enter your shipping address"
            onChange={(e) => setShippingAddress(e.target.value)}
            className="form-control m-2"
          />
        </>
      )}
    </>
  );
};

export default Cart;
