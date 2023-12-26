import React from "react";
import "./Home.css";
import Product from "../Product";
import im from "../images/at.jpg"

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/71Q+c4-cnjL._SX3000_.jpg"
          alt=""
        />
      </div>
      <div className="home_row">
        <Product
          id="121212"
          title="king of greed;how kings are lead there people."
          price={110.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81YI6n-9n1L._AC_SY310_.jpg"
        />
        <Product
          id="121211"
          title="king of greed;how kings are lead there people."
          price={991.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81JfFNg-UfL._AC_SL1500_.jpg"
        />
        <Product
          id="121234"
          title="sockes for summer and for playing foot ball ."
          price={17.96}
          rating={7}
          image={im}
        />
      </div>
      <div className="home_row">
        <Product
          id="121213"
          title="king of greed;how kings are lead there people."
          price={319.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61LII8KymLL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="121214"
          title="king of greed;how kings are lead there people."
          price={11.96}
          rating={6}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_2X._SY608_CB639748111_.jpg"
        />
        <Product
          id="121215"
          title="king of greed;how kings are lead there people."
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/71lS1QaEZIL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home_row  single_product">
        <Product
          className="single_product"
          id="121216"
          title="king of greed;how kings are lead there people."
          price={678.96}
          rating={7}
          image="https://m.media-amazon.com/images/I/61S+dIguSnL._AC_UY327_FMwebp_QL65_.jpg  "
        />
        <Product
          className="single_product"
          id="121216"
          title="king of greed;how kings are lead there people."
          price={678.96}
          rating={7}
          image="https://m.media-amazon.com/images/I/61mCk9hfCoL._AC_SX679_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="121217"
          title="king of greed;how kings are lead there people."
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/March/mp_20230219_ff_desktopsinglecategory_desktop_758x608._SY608_CB612846074_.jpg"
        />

        <Product
          id="121218"
          title="king of greed;how kings are lead there people."
          price={11.96}
          rating={7}
          image="https://m.media-amazon.com/images/I/713fqJBrg7L._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="121219"
          title="king of greed;how kings are lead there people."
          price={11.96}
          rating={6}
          image="https://m.media-amazon.com/images/I/61F3dCO+ZmL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="121222"
          title="king of greed;how kings are lead there people."
          price={11.96}
          rating={8}
          image="https://m.media-amazon.com/images/I/613hKQ+PnLL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
