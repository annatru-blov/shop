import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import Order from "./Order";

function Header(props) {


  const showOrders = () => {
    let sum = 0
    props.orders.map(el => sum += Number.parseFloat(el.price))
    return (
      <div>
        {props.orders.map((el) => {
          return (
            <Order key={el.id} item={el} deleteToItem={props.deleteToItem} />
          );
        })}
        <p className="summa">Сумма: {new Intl.NumberFormat().format(sum)}$</p>
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div>
        <h2 className="empty">Товаров нет</h2>
      </div>
    );
  };

  let [cardOpen, setCardOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <HiShoppingCart
          onClick={() => setCardOpen((cardOpen = !cardOpen))}
          className={`shop-card-button ${cardOpen && "active"}`}
        />

        {cardOpen && (
          <div className="shop-card">
            {props.orders.length > 0 ? showOrders() : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
export default Header;
