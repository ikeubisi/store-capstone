import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

// Components & Store
import { deleteProduct } from "../../store/productCartSlice";

// Styles
import "../../styles/products.css";

// CartItem gets fed into Cart page
const CartItem = ({ description, id, img, name, price }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    // Pass in id as payload so correct product is deleted
    dispatch(deleteProduct({ id: id }));
  };

  return (
    <>
      <li className="list-group-item">
        <div className="d-flex justify-content-around">
          <span className="m-1">£{price}</span>
          <span className="m-1 fw-bold">{name}</span>
          <span className="m-1">{description}</span>
          <img
            className="productImg"
            src={img}
            alt={name}
            title={description}
          />
          <button onClick={handleDeleteClick} className="btn btn-danger">
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

// Use PropTypes to make sure CartItem not only gets the required props from the component passing them
// down but also makes sure they are the correct type eg String for name and Number for price
// ESLint advises I use PropTypes so I can be warned if my definitions don't match
CartItem.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CartItem;
