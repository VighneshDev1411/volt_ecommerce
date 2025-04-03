"use client";
import { useState } from "react";
import ProductCard from "../ProductCard/page";
import Cart from "../ShoppingCart/page";
import productsData from "../../utils/products.json";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("best-sellers");
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<ProductProps[]>([]);

  // Add to Cart function
  const addToCart = (product: ProductProps) => {
    setCart((prevCart) => [...prevCart, product]);
    setCartOpen(true); // Open cart after adding an item
  };

  // Remove from Cart function
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex justify-center space-x-4 bg-white py-4">
        <button
          className={`px-6 py-2 font-semibold border-b-4 ${
            activeTab === "best-sellers"
              ? "border-[#222222] text-[#222222]"
              : "border-transparent text-gray-600"
          }`}
          onClick={() => setActiveTab("best-sellers")}
        >
          BEST SELLERS
        </button>
        <button
          className={`px-6 py-2 font-semibold border-b-4 ${
            activeTab === "new-arrivals"
              ? "border-[#222222] text-[#222222]"
              : "border-transparent text-gray-600"
          }`}
          onClick={() => setActiveTab("new-arrivals")}
        >
          NEW ARRIVALS
        </button>
      </div>

      {/* Product Cards */}
      <div className="container mx-auto p-6">
        <div className="flex space-x-4 p-4 w-[calc(100vw-2rem)] overflow-x-auto">
          {(activeTab === "best-sellers"
            ? productsData.best_sellers
            : productsData.new_arrivals
          )
            .slice(0, 5)
            .map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                addToCart={addToCart}
              />
            ))}
        </div>
      </div>

      {/* 🛒 Cart Modal */}
      <Cart
        open={cartOpen}
        setOpen={setCartOpen}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default CategoryTabs;
