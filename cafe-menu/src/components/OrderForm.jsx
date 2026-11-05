import { useState } from "react";

export default function OrderForm({ totalItems, onPlaceOrder }) {
  const [customerName, setCustomerName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onPlaceOrder(customerName);
    setCustomerName("");
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <label htmlFor="customer-name">Customer name</label>
      <input
        id="customer-name"
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        required
      />
      <div className="order-summary">
        Items in your order: {totalItems}
      </div>
      <button type="submit" disabled={totalItems === 0}>
        Place Order
      </button>
    </form>
  );
}