import React, { useState } from "react";
import dataBoutique from "../../dataBoutique";

function Boutique({ addToCart }) {
  const [dataBoutiqueState, setDataBoutiqueState] = useState(
    dataBoutique.map((item, index) => ({
      ...item,
      id: index, // Ensure each item has a unique ID
      qte: parseInt(item.qte), // Convert quantities to numbers
      price: parseFloat(item.price), // Convert price to a number
    }))
  );

  const handleAddToCart = (item) => {
    setDataBoutiqueState((prevState) =>
      prevState.map((boutiqueItem) =>
        boutiqueItem.id === item.id
          ? { ...boutiqueItem, qte: boutiqueItem.qte - 1 }
          : boutiqueItem
      )
    );

    addToCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  return (
    <div className="container my-4">
      <div className="row">
        {dataBoutiqueState.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card text-white bg-primary h-100">
              <img
                src={"./assets/img/" + item.imgUrl}
                alt={item.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h2 className="card-header">{item.name}</h2>
                <p className="card-title">{item.price.toFixed(2)}€</p>
                <p className="card-text">{item.description}</p>
                <p className="card-text">
                  {item.qte > 0
                    ? `${item.qte} costume(s) en stock`
                    : "Ce produit n'est plus disponible."}
                </p>
                <button
                  className="btn btn-light"
                  onClick={() => handleAddToCart(item)}
                  disabled={item.qte <= 0}
                >
                  Achat
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Boutique;