import { Link } from "react-router-dom"; // Importing Link component from react-router-dom for navigation
import Navbar from "../Navbar"; // Importing the Navbar component
import CartTotal from "../products/CartTotal"; // Importing the CartTotal component

const Footer = () => {
  const currentYear = new Date(Date.now()); // Getting the current date and time

  return (
    <>
      {/* Container for the CartTotal and Navbar components */}
      <div className="sticky-bottom mt-2">
        <CartTotal /> {/* Rendering the CartTotal component */}
        <Navbar /> {/* Rendering the Navbar component */}
      </div>
      {/* Footer section */}
      <footer className="m-2">
        <p className="fst-italic">
          Copyright{" "}
          <Link
            to="https://github.com/markpackham"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mark Packham {/* Link to Mark Packham's GitHub profile */}
          </Link>{" "}
          {currentYear.getFullYear()} {/* Displaying the current year */}
        </p>
      </footer>
    </>
  );
};

export default Footer; // Exporting the Footer component

