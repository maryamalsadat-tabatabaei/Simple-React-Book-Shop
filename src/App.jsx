import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/" element={<ProductList />} />
          <Route path="/rooms/:slug" element={<SingleProduct />} />
        </Routes>

      </>
    </div>
  );
}

export default App;
