import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  const showOrders = (props) => {
    let summa = 0;
    props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));
    return (
      <div>
        {props.orders.map((el) => (
          <Order key={el.id} item={el} onDelete={props.onDelete} />
        ))}
        <p className="summa">
          До сплати: {new Intl.NumberFormat().format(summa)} UAH
        </p>
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className="empty">
        <h2>Товарів немає</h2>
      </div>
    );
  };

  return (
    <header>
      <div className="">
        <span className="logo">House staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакти</li>
          <li>Кабінет</li>
        </ul>
        <FaShoppingCart
          className={`shop-card-button ${cartOpen ? "active" : ""}`}
          onClick={() => setCartOpen(!cartOpen)}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
