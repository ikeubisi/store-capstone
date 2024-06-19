import { useDispatch, useSelector } from "react-redux"; // Importing useDispatch and useSelector hooks from react-redux
import { setUserName } from "../../store/userSlice"; // Importing the setUserName action from userSlice
import Navbar from "../Navbar"; // Importing the Navbar component

const Header = () => {
  // Grab userName from the Redux store
  const userName = useSelector((state) => state.userName.userName);

  // Initialize the dispatch function
  const dispatch = useDispatch();

  // Function to handle user logout
  const handleLogout = () => {
    dispatch(setUserName("Logged out")); // Dispatch the setUserName action to update the state
  };

  return (
    <header className="mt-2">
      <h1>
        React Store Capstone{" "}
        <span>
          <img src="data:image/png;base64,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" alt="logo" id="storeLogo" /> {/* Store logo image */}
        </span>
      </h1>
      <h5>
        User: {userName} {/* Display the userName */}
        {/* Conditionally render the logout button if user is not logged out */}
        {userName !== "Logged out" && (
          <button onClick={handleLogout} className="btn btn-secondary">
            Logout
          </button>
        )}
      </h5>
      <Navbar /> {/* Render the Navbar component */}
    </header>
  );
};

export default Header; // Exporting the Header component
