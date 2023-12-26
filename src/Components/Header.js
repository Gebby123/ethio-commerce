import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://i0.wp.com/www.fontshut.com/wp-content/uploads/2023/02/Amazon-Logo-Font-1-scaled-1.jpg?w=2000&ssl=1 "
        />
      </Link>
      <div className="header_search">
        <input
          className="header_searchInput"
          placeholder="Search"
          type="text"
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav ">
        <div className="header_option ">
          <span className="header_optionLineOne"> Deliver to</span>
          <span className="header_optionLineTwo">Ethiopia🌍</span>
        </div>
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello , {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "sign out" : "sign in"}
            </span>
          </div>
        </Link>
        <Link to='/orders'>
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& orders</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <span className="header_optionLineTwo header_basketCount">
              {basket.length}
            </span>
            <ShoppingCartIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
