import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./componenets/Headers";
import Home from "./componenets/Home";
import CartDetails from "./componenets/CartDetails";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
      <Toaster />
    </>
  );
}
export default App;
