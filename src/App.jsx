import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]); // Добавление нового товара в корзину
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId)); // Удаление товара из корзины
  };

  return (
      <div>
        <h1>Магазин</h1>
        <button onClick={() => addToCart({ id: 1, name: "Товар 1", price: 100 })}>
          Добавить Товар 1
        </button>
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
  );
}

function Cart({ cart, removeFromCart }) {
  return (
      <div>
        <h2>Корзина</h2>
        {cart.length === 0 ? (
            <p>Корзина пуста</p>
        ) : (
            <ul>
              {cart.map((item) => (
                  <li key={item.id}>
                    {item.name} - {item.price} руб.
                    <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
}

export default App;
