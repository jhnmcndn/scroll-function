import React, { useState } from "react";
import "./App.scss";

export default function App() {
  const navItems = [
    {
      id: "burger",
      title: "Burger",
    },
    {
      id: "chicken",
      title: "Chicken",
    },
    {
      id: "pizza",
      title: "Pizza",
    },
    {
      id: "sushi",
      title: "Sushi",
    },
    {
      id: "drinks",
      title: "Drinks",
    },
  ];

  const burgerContent = [
    {
      title: "Burger1",
      price: "$2",
    },
    {
      title: "Burger1",
      price: "$2",
    },
    {
      title: "Burger1",
      price: "$2",
    },
    {
      title: "Burger1",
      price: "$2",
    },
    {
      title: "Burger1",
      price: "$2",
    },
  ];

  const pizzaContent = [
    {
      title: "Pizza1",
      price: "$82",
    },
    {
      title: "Pizza2",
      price: "$22",
    },
    {
      title: "Pizza3",
      price: "$82",
    },
    {
      title: "Pizza4",
      price: "$22",
    },
    {
      title: "Pizza5",
      price: "$21",
    },
  ];

  const chickenContent = [
    {
      title: "Chicken1",
      price: "$287",
    },
    {
      title: "Chicken2",
      price: "$21",
    },
    {
      title: "Chicken3",
      price: "$29",
    },
    {
      title: "Chicken4",
      price: "$26",
    },
    {
      title: "Chicken5",
      price: "$21",
    },
  ];

  const sushiContent = [
    {
      title: "Sushi1",
      price: "$24",
    },
    {
      title: "Sushi2",
      price: "$29",
    },
    {
      title: "Sushi3",
      price: "$24",
    },
    {
      title: "Sushi4",
      price: "$22",
    },
    {
      title: "Sushi5",
      price: "$12",
    },
  ];

  const drinksContent = [
    {
      title: "Drinks1",
      price: "$20",
    },
    {
      title: "Drinks2",
      price: "$23",
    },
    {
      title: "Drinks3",
      price: "$21",
    },
    {
      title: "Drinks4",
      price: "$23",
    },
    {
      title: "Drinks5",
      price: "$5",
    },
  ];

  // console.log(count);

  const renderBurgerSection = () => {
    <section className="burgerContainer">
      <div className="titleBox">
        <div className="title">Burger Category</div>
      </div>
    </section>;
  };

  console.log(renderBurgerSection);

  return (
    <>
      <div className="venueContainer">
        <header>
          <ul>
            {navItems.map((item, index) => {
              return (
                <li key={index} id={item.id}>
                  {item.title}
                </li>
              );
            })}
          </ul>
        </header>
        <div className="scrollContainer">
          <section id="burger" className="burgerContainer">
            <div className="titleBox">
              <div className="title">Burger Category</div>
            </div>
            {burgerContent.map((item) => {
              return <div className="foodBox">{item.title}</div>;
            })}
          </section>

          <section className="pizzaContainer">
            <div className="titleBox">
              <div className="title">Pizza Category</div>
            </div>
            {pizzaContent.map((item) => {
              return <div className="foodBox">{item.title}</div>;
            })}
          </section>

          <section className="chickenContainer">
            <div className="titleBox">
              <div className="title">Chicken Category</div>
            </div>
            {chickenContent.map((item) => {
              return <div className="foodBox">{item.title}</div>;
            })}
          </section>

          <section className="sushiContainer">
            <div className="titleBox">
              <div className="title">Sushi Category</div>
            </div>
            {sushiContent.map((item) => {
              return <div className="foodBox">{item.title}</div>;
            })}
          </section>

          <section className="drinksContainer">
            <div className="titleBox">
              <div className="title">Drinks Category</div>
            </div>
            {drinksContent.map((item) => {
              return <div className="foodBox">{item.title}</div>;
            })}
          </section>
        </div>
      </div>
    </>
  );
}
