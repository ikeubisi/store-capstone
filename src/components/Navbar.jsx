import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Sitewide Navbar lives in Header and Footer
export default function Navbar() {
  // Retrieve the username from the Redux store
  const userName = useSelector((state) => state.userName.userName);

  return (
    <nav className="navbar navbar-expand-lg mb-3 rounded">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* Link to the Home page */}
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {/* Show Login and Register links only if user is logged out */}
          {userName === "Logged out" && (
            <>
              <li className="nav-item">
                {/* Link to the Login page */}
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                {/* Link to the Register page */}
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </>
          )}
          <li className="nav-item">
            {/* Link to the Products page */}
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            {/* Link to the Cart page */}
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

