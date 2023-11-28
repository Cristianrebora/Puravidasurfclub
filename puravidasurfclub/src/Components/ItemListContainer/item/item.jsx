import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
    <div className="card w-25">
      <div className="card-body p-0 text-center">
        <img
          height={150}
          width={150}
          src={product.imageUrl}
          className="card-img-top w-100"
          alt=""
        />
        <h4>{product.name}</h4>
        <p>Precio: {product.price}</p>
        <p>Stock: {product.stock} </p>
      </div>
      <div className="card-footer">
        <Link to={`/detail/${product.id}`} className="btn btn-outline-dark w-100">
          Detalle
        </Link>
      </div>
    </div>
  );
};
