import React from 'react';

export default function ShopCard(props) {
  const { name, price, color, img } = props.items;

  return (
    <div className="item-details">
      <h2 className="name">{name}</h2>
      <p className="color">{color}</p>
      <img src={img} alt={`${name}-${color}`} />
      <div className="item-actions">
        <p className="price">${price}</p>
        <button className="button">Add to cart</button>
      </div>
    </div>
  );
}
