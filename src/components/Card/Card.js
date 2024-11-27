import React from 'react';
import './Card.css';

function Card(props) {
  const handleClickCard = (id) => {
    props.click(id);
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card text-white bg-primary h-100">
        <img src={"./assets/img/" + props.data.imgUrl} alt={props.data.name} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-header">{props.data.name}</h2>
          <p className="card-title">{props.data.price}€</p>
          <p className="card-text">{props.data.description}</p>
          <p className="card-text">
            {props.data.qte > 0
              ? `${props.data.qte} costume(s) en stock`
              : "Ce produit n'est plus disponible."}
          </p>
          <button className="btn btn-light" onClick={() => handleClickCard(props.data.id)}>
            Achat
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

