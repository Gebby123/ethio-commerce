import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
 
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
       id: id,
    });
  };
  return (
    <div className="CheckoutProduct">
      <img className="CheckoutProduct__image" src={image} />

      <div className="CheckoutProduct__info">
        <p>{title}</p>
        <p className="CheckoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
