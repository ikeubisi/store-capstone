import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

// Components & Store
import { addToCart } from "../../store/productCartSlice";

// Styles
import "../../styles/products.css";

// ProductItem gets fed into Products page
const ProductItem = ({ description, img, name, price }) => {
  const dispatch = useDispatch();

  // Grab user from store
  const userName = useSelector((state) => state.userName.userName);

  //Add to cart array
  const handleAddToCartClick = () => {
    const cartProduct = {
      description: description,
      // Make sure every item added to cart has a unique id, needed for keys & deletions
      id: crypto.randomUUID(),
      img: img,
      name: name,
      price: price,
    };
    dispatch(addToCart(cartProduct));
  };

  return (
    <>
      <li className="list-group-item">
        <div className="d-flex justify-content-around">
          <span className="m-1">£{price}</span>
          <span className="m-1 fw-bold">{name}</span>
          <span className="productDescription m-1">{description}</span>
          <img
            src={img}
            alt={name}
            title={description}
            className="productImg"
          />
          {/* Remove button access if user logged out */}
          {userName !== "Logged out" && (
            <button onClick={handleAddToCartClick} className="btn btn-success">
              Add to Cart
            </button>
          )}
        </div>
      </li>
    </>
  );
};

ProductItem.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;
