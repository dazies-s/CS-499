import { useState } from "react";
import MenuItem from "./components/MenuItem";
import Footer from "./components/Footer";
import OrderForm from "./components/OrderForm";
import { menu } from "./data";

export default function App() {
  const [showDrinksOnly, setShowDrinksOnly] = useState(true);
  const [order, setOrder] = useState({});

  function addToOrder(id) {
    setOrder(prev => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  function removeFromOrder(id) {
    setOrder(prev => ({ ...prev, [id]: Math.max(0, (prev[id] ?? 0) - 1) }));
  }

  // Calculate total items in the order
  const totalItems = Object.values(order).reduce(
    (sum, quantity) => sum + quantity,
    0
  );

  // Place order handler
  function placeOrder(customerName) {
    alert(`Order placed for ${customerName}! ${totalItems} item(s).`);
    setOrder({});
  }

  const displayedMenu = showDrinksOnly
    ? menu.filter(item => item.category === "drink")
    : menu;

  return (
    <div className="page">
      <h1>Campus Cafe</h1>

      <p className="tagline">
        Fresh coffee between classes
      </p>

      <h2>{showDrinksOnly ? "Drinks" : "Full Menu"}</h2>

      <button onClick={() => setShowDrinksOnly(!showDrinksOnly)}>
        {showDrinksOnly ? "Show Full Menu" : "Show Drinks Only"}
      </button>

      {displayedMenu.map(item => (
        <MenuItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          available={item.available}
          count={order[item.id] ?? 0}
          onAdd={() => addToOrder(item.id)}
          onRemove={() => removeFromOrder(item.id)}
        />
      ))}

      {/* Pass totalItems and onPlaceOrder props to OrderForm */}
      <OrderForm 
        totalItems={totalItems} 
        onPlaceOrder={placeOrder} 
      />

      <Footer />
    </div>
  );
}