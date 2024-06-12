import React from "react";
import Home from "./Pages/Home";
import KayoolaEVS from "./Pages/KayoolaEVS/Main";
import KayoolaCoach from "./Pages/KayoolaCoach/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EVSOrder from "./Pages/KayoolaEVS/Order";
import CoachOrder from "./Pages/KayoolaCoach/Order";
import OrdersList from "./Pages/OrdersList";
import Shop from "./Pages/Shop";
import About from "./Pages/About/Main";
import Autoparts from "./Pages/Autoparts";
import Reports from "./Pages/Reports/Reports";
import Blog from "./Pages/Blog";
import Clubs from "./Pages/Clubs/Clubs";
import Projects from "./Pages/Projects";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import NotFound from "./Pages/NotFound";
import Concepts from "./Pages/Products/Concepts";
import Plant from "./Pages/Plant";
import ContractManufacturing from "./Pages/Services/Contract Manufacturing/Main";
import Cart from "./Pages/Cart/Cart";
import Main from "./Pages/Services/Engineering Services/Main";
import VehicleHire from "./Pages/Services/Vehicle Hire/Main";
import ProductSupport from "./Pages/Services/Product Support/Main";
import Charger from "./Pages/Charger/Main";
import Products from "./Pages/Products/Main";
import NewPage from "./Components/Newpage";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      // Optional configuration options for AOS
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-page" element={<NewPage />} />
        <Route path="/concepts" element={<Concepts />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/kayoola-evs" element={<KayoolaEVS />} />
        <Route path="/kayoola-coach" element={<KayoolaCoach />} />
        <Route path="/orders-evs" element={<EVSOrder />} />
        <Route path="/orders-coach" element={<CoachOrder />} />
        <Route path="/plants" element={<Plant />} />
        <Route path="/products" element={<Products />} />
        <Route path="/vehicle-hire" element={<VehicleHire />} />
        <Route path="/orders-list" element={<OrdersList />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/auto-parts" element={<Autoparts />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/engineering-services" element={<Main />} />
        <Route
          path="/contract-manufacturing"
          element={<ContractManufacturing />}
        />
        <Route path="/vehicle-hire" element={<VehicleHire />} />
        <Route path="/product-support" element={<ProductSupport />} />
        <Route path="/chargers" element={<Charger />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
