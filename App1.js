// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";

// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home addToCart={addToCart} />} />
//         <Route path="/cart" element={<Cart cart={cart} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;









import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;