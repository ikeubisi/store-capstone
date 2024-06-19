import { useSelector } from "react-redux";

const CartTotal = () => {
  // Grab products from store
  const productCart = useSelector((state) => state.productCart);

  // Convert balance into UK money format
  const currencyFormatter = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  });

  // Show total price in cart
  const totalPrice = productCart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      {productCart.length > 0 && (
        <div className="cartTotal">
          <h5>
            Number of Items in cart: {productCart.length} costing{" "}
            {currencyFormatter.format(totalPrice)}
          </h5>
        </div>
      )}
    </>
  );
};

export default CartTotal;
