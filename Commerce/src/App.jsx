import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import Hero from "./Component/Hero";
import Women from "./Component/Women";
import Kids from "./Component/Kids";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Men from "./Component/Men";
import Cart from "./Component/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productWithId = { ...product, id: Date.now() };
    setCart((prevCart) => [...prevCart, productWithId]); // Use functional update
    console.log("Cart after adding:", cart); // Debugging
    alert("Product Added to Cart");
  };
  
  const removeFromCart = (idToRemove) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== idToRemove));
    console.log("Cart after removing:", cart); // Debugging
  };
  


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar cartItemCount={cart.length} /> {/* Pass item count to NavBar */}
          <Hero />
        </>
      ),
    },
    {
      path: "/Men",
      element: (
        <>
          <NavBar cartItemCount={cart.length} /> {/* Pass item count to NavBar */}
          <Men addToCart={addToCart} />
        </>
      ),
    },
    {
      path: "/Women",
      element: (
        <>
          <NavBar cartItemCount={cart.length} /> {/* Pass item count to NavBar */}
          <Women addToCart={addToCart} /> {/* Pass addToCart to Women */}
        </>
      ),
    },
    {
      path: "/Kids",
      element: (
        <>
          <NavBar cartItemCount={cart.length} /> {/* Pass item count to NavBar */}
          <Kids addToCart={addToCart} /> {/* Pass addToCart to Kids */}
        </>
      ),
    },
    {
      path: "/Cart",
      element: (
        <>
          <NavBar cartItemCount={cart.length} /> {/* Pass item count to NavBar */}
          <Cart cartItems={cart} removeFromCart={removeFromCart} />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
