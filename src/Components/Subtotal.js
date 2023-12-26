import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";
function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

const getBasketTotal=(basket)=>
 basket?.reduce ((amount,item)=>item.price+amount,0) 


  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length}items):  <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
            <button onClick={(e)=>navigate('/payment')}>Proceed to Checkout</button>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
