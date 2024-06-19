import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import RegisterPage from "./components/users/RegisterPage";
import Home from "./components/Home";
import LoginPage from "./components/users/LoginPage";
import Products from "./components/products/Products";
import Cart from "./components/products/Cart";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        {/* 404 page */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
