import { useState } from "react";
import MenuItem from "./components/MenuItem";
import Footer from "./components/Footer";
import { menu } from "./data";

export default function App() {
  const [showDrinksOnly, setShowDrinksOnly] = useState(true);

  // Choose between filtered drinks array or the full menu array
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
        />
      ))}

      <Footer />
    </div>
  );
}