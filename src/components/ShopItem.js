import React from 'react';

export default function ShopItem(props) {
  const { name, price, color, img } = props.items;

  return (
    <div className="item-details">
      <img src={img} alt={`${name}-${color}`} />
      <h2 className="name">{name}</h2>
      <p className="color">{color}</p>
      <p className="price">${price}</p>
      <button className="button">Add to cart</button>
    </div>
  );
}
