import React from "react";

function Panier({ cartItems }) {
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="container my-4">
      <h2>Panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item">
                {item.name} x{item.quantity} - {(item.price * item.quantity).toFixed(2)}€
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <strong>Total: {totalPrice}€</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default Panier;