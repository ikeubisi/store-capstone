import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Components & Store
import ProductItem from "./ProductItem";
import CartTotal from "./CartTotal";

// Products page
const Products = () => {
  // Grab user from store
  const userName = useSelector((state) => state.userName.userName);

  // Grab products from store
  const products = useSelector((state) => state.products);

  return (
    <div>
      <h1>Products</h1>
      <hr />
      <div className="storeImageContainer">
        <img
          className="kitchenUtensils"
          src="/images/kitchen_utensils/kitchenUtensils2.jpg"
          alt="kitchen utensils"
          title="React Store Capstone Kitchen Utensils"
        />
      </div>

      {/* Only logged in users can buy products */}
      {userName === "Logged out" && (
        <h5 className="m-2">
          Please make sure you are either <Link to="/login">logged in</Link> or
          are <Link to="/register">registered</Link> to buy products.
        </h5>
      )}

      <CartTotal />

      <ul className="list-group">
        {/* Will say loading if it takes a while to gets items from the ProductItem component 
        so user will know app hasn't just frozen
        */}
        {products.map((product) => (
          <ProductItem
            description={product.description}
            id={product.id}
            img={product.img}
            key={product.id}
            name={product.name}
            price={product.price}
          />
        )) || <h3>Loading ...</h3>}
      </ul>
    </div>
  );
};

export default Products;
