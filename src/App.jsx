import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem'; 
import Footer from './components/Footer';
import { useState } from "react";

function App() {

  /* PRODUCTS ARRAY */
  const products = [
    { 
      id: 1, 
      name: "Wireless Headphones", 
      price: 99.99, 
      image: "https://placehold.co/600x400",
      description: "Premium noise-cancelling headphones with 30-hour battery life"
    },
    { 
      id: 2, 
      name: "Smart Watch", 
      price: 249.99, 
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    { 
      id: 3, 
      name: "Bluetooth Speaker", 
      price: 79.99, 
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    { 
      id: 4, 
      name: "Laptop Stand", 
      price: 49.99, 
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    { 
      id: 5, 
      name: "Webcam", 
      price: 129.99, 
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction"
    },
    { 
      id: 6, 
      name: "Mechanical Keyboard", 
      price: 159.99, 
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches"
    }
  ];

  /* CART STATE */
  const [cart, setCart] = useState([]);

  /* ADD TO CART FUNCTION */
  function addToCart(product) {
    setCart([...cart, product]);
  }

  /* REMOVE FROM CART FUNCTION*/
  function removeFromCart(indexToRemove) {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  }

  /* CART TOTAL */
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">

      {/* Header with cart count */}
      <Header storeName="GadgetGrove" cartCount={cart.length} />

      {/* Hero Banner */}
      <Hero
        title="Discover Premium Tech"
        subtitle="Curated gadgets that elevate your everyday. Free shipping on orders over $50."
        ctaText="Shop the Collection"
        backgroundImage="https://placehold.co/1200x400/1d1d1f/ffffff?text=GadgetGrove+Premium+Tech"
      />

      {/* PRODUCTS SECTION */}
      <main className="main-content" id="products">
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">
          Hand-picked essentials for the modern tech enthusiast
        </p>

        <div className="products-grid">
          {/* product cards using .map() */}
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </main>

      {/* CART SECTION */}
      <section className="cart-section">
        <h2>Your Cart</h2>

        {/* Show message if cart is empty */}
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {/* Render each cart item */}
            {cart.map((item, index) => (
              <CartItem 
                key={`${item.id}-${index}`}
                item={item}
                onRemove={() => removeFromCart(index)}
              />
            ))}

            {/* Cart total */}
            <p className="cart-total">
              Total: ${total.toFixed(2)}
            </p>
          </>
        )}
      </section>

      {/* Footer */}
      <Footer
        storeName="GadgetGrove"
        email="hello@gadgetgrove.com"
      />
        
    </div>
  );
}

export default App;