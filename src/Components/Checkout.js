import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="Checkout">
      <div className="Checkout_left">
        <img
          src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
          className="Checkout_ad"
        />
        <h2> Hello, </h2>
        <h2 className="Checkout_title">Your shopping Basket</h2>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>

      <div className="Checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
