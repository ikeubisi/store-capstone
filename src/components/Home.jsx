import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Main landing page
const Home = () => {
  // Retrieve the username from the Redux store
  const userName = useSelector((state) => state.userName.userName);

  return (
    <div>
      <h1>Welcome to the React Store Capstone</h1>
      <hr />
      <h2>Home to some of the best kitchen utensils you will ever find!</h2>
      {/* Encourage user to login to buy stuff */}
      {userName === "Logged out" && (
        <h5 className="m-2 text-center">
          Please make sure you are either <Link to="/login">logged in</Link> or
          are <Link to="/register">registered</Link> to buy products.
        </h5>
      )}
      <div className="storeImageContainer">
        <img
          className="storeImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs07jtLCC_qMsCdH5upNzDXZ8jucP0TahCsw&s"
          alt="store image"
          title="React Store Capstone"
        />
      </div>
      <div className="storeImageContainer">
        <img
          className="kitchenUtensils"
          src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbC2R_Y77aztkBnuNx9sZWNCb7pnE3Nz0XlCzVcdU9Uw3qIkk-NM-rdf4CNgpMwXx2UrdIUot9TGVkhqh9HQorfC69xkgxVKNOEvtuoq4W7hVdhnLwEnEXomUuEuUliwCukXTH8A&usqp=CAc"
          alt="kitchen utensils"
          title="React Store Capstone Kitchen Utensils"
        />
      </div>

      {/* Company history section */}
      <h3>Company History</h3>
      <p>
        Founded in 2022, TechInnovate Inc. began as a small startup with a vision to revolutionize the technology industry.
      </p>
      <div className="storeImageContainer">
        <img
          className="kitchenUtensils"
          src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQD4mDA-Hxo39wOx8bl7qvfPmfQS65qng0zjE0HkJ0CtT3DTH3egHzUeaEMf9QgToblSbLw3zARbEuGoHZouVR7lGYpKlVuqw_GpKlKGzsF9_hia5RbuG1OyHQ52vRXLIDS2LX--w&usqp=CAc"
          alt="kitchen utensils"
          title="React Store Capstone Kitchen Utensils"
        />
      </div>
      <p>
       
In 2023, we secured our first major investment, expanded our team, and moved into a dedicated office, sparking rapid growth.
      </p>

      {/* Terms of Service section */}
      <h6 className="text-center">Terms of Service</h6>
      <p>
        Our breakthrough came in 2022 with the release of our flagship product, InnovatePro, a comprehensive software solution that quickly became a market leader.
      </p>
      <div className="storeImageContainer">
        <img
          className="kitchenUtensils"
          src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRhlU9npwnAWr3NtzjtnzyxktMZ7W9sB86zE-vNt4ISrH5uhhJ23-9LueLdc3tskkrEJrXT-0GWc4m6gJIzNMET4RpBJ9e4qE51U55eoj-VUrevqibWE7nyV5u8nOe3FB9T3nQlaw&usqp=CAc"
          title="React Store Capstone Kitchen Utensils"
        />
      </div>

      {/* Privacy Policy section */}
      <h6 className="mt-2 text-center">Privacy Policy</h6>
      <p>
        Throughout the 2023, we continued to expand our product offerings and entered new markets. 
      </p>
    </div>
  );
};

export default Home;
