export default function MenuItem({
    name,
    description,
    price,
    available,
    count,
    onAdd,
    onRemove
}) {
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
                <button onClick={onAdd}>
                    Add to Order
                </button>
            ) : (
                <p className="sold-out">
                    Sold Out
                </p>
            )}

            {count > 0 && (
                <button onClick={onRemove}>
                    Remove
                </button>
            )}
        </div>
    );
}