import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";



function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.researchgate.net/profile/J-Srinivasan/publication/339947508/figure/fig1/AS:869633015939077@1584348076579/A-Poster-of-AMAZON-GO-and-its-MOTO.png"
          alt=""
        />
        <div>
          <h4>Hello,{user?.email}</h4>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map(item =>(
            <CheckoutProduct
            id = {item.id}
            title = {item.title}
            image = {item.image}
            price = {item.price}
            rating = {item.rating}/>
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
