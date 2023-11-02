import Heading from "./components/heading/Heading";
import Menu from "./pages/menu/Menu";
import Order from "./pages/order/Order";
import About from "./pages/About/About";
import Contact from "./pages/contect/Contact";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [navLocation, setNavLocation] = useState([new Array().fill(false)]);

  return (
    <Router>
      <Heading />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
export default App;
