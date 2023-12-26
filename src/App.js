import "./App.css";
import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer";
import Four04 from "./Components/Four04";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import { useStateValue } from "./Components/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js"; //import stripe}
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";

const stripePromise = loadStripe(
  "pk_test_51OFYMXAgOETwbFJyAdQGSHxfhtK9Nun3DSWhsAfN8feXTCqSazyqZztQ76ckQvn8SkQbmd5ySXQOKV9Aq3D8JI0j00RWijAjFQ"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<Four04 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
