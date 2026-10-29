import { useState } from "react";
export default function MenuItem({
    name,
    description,
    price,
    available
}) {

    const [count, setCount] = useState(0);

    function handleAddClick() {
        setCount(count + 1);
    }

    function handleRemoveClick() {
        setCount(count - 1);
    }

    return (
        <div className="menu-item">
            <h3>{name}</h3>

            <p>{description}</p>

            <p className="price">
                ${price.toFixed(2)}
            </p>

            {count > 0 && (
                <p className="order-count">
                    In your order: {count}
                </p>
            )}

            {available ? (
                <button onClick={handleAddClick}>
                    Add to Order
                </button>
            ) : (
                <p className="sold-out">
                    Sold Out
                </p>
            )}

            {count > 0 && (
                <button onClick={handleRemoveClick}>
                    Remove
                </button>
            )}
        </div>
    );
}