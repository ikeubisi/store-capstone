import { Link } from "react-router-dom";

// Will show on any url that isn't used by the other components
const PageNotFound = () => {
  return (
    <>
      <h1>404 Error</h1>
      <h2>Sorry Page Not Found</h2>
      <div className="storeImageContainer">
        <img
          className="storeImage"
          src="/images/oldStore.jpg"
          alt="old store image"
        />
      </div>
      <Link className="nav-link" to="/">
        <h2 className="m-2">Return Home?</h2>
      </Link>
    </>
  );
};

export default PageNotFound;
