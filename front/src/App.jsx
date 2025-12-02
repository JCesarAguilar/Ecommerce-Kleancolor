import "./App.css";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home.jsx";
import Products from "./views/Products/Products";
import ProductDetail from "./views/Products/ProductDetail.jsx";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PATHROUTES } from "./helpers/NavItems.js";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path={PATHROUTES.HOME} element={<Home />} />
            <Route path={PATHROUTES.PRODUCTS} element={<Products />} />
            <Route path={PATHROUTES.PRODUCT} element={<ProductDetail />} />
            <Route path={PATHROUTES.CONTACT} element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
