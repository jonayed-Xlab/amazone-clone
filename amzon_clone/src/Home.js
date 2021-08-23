import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_2x._CB429090087_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="4427"
            title="Comfy styles for her"
            price={99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={5}
          />
          <Product
            id="4754"
            title="Shop Laptops & Tablets"
            price={245}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
        <Product
            id="4637"
            title="Explore home bedding"
            price={245}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
            rating={2}
          />
          <Product
            id="5878"
            title="Gaming merchandise"
            price={245}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
            rating={2}
          />
          <Product
            id="8574"
            title="Shop Laptops & Tablets"
            price={245}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
        <Product
            id="5452"
            title="Oculus"
            price={245}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
