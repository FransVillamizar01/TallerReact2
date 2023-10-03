"use client"; 
import React, { useEffect, useState } from 'react';
import styles from './IndexCarts.module.css';
import ProductList from './ProductList'; // Importa el componente ProductList

export default function Cart() {
  const [carts, setCarts] = useState([]);
  const [selectedCart, setSelectedCart] = useState(null); // Estado para el carrito seleccionado

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
      .then(res => res.json())
      .then(data => {
        let nextID = 1; // Inicializa el ID del carrito en 1
        const cartsWithSequentialIDs = data.map(cart => ({
          ...cart,
          id: nextID++ // Asigna un ID secuencial y luego incrementa el contador
        }));
        setCarts(cartsWithSequentialIDs);
      });
  }, []);

  // Función para manejar el clic en el botón "Mostrar productos" para un carrito específico
  const handleShowProducts = (cart) => {
    setSelectedCart(selectedCart === cart ? null : cart); // Si es el mismo carrito, ciérralo; de lo contrario, ábrelo
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>App</h1>
      </header>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <ul>
            <li>Carts</li>
            <li>Products</li>
            <li>New Cart</li>
            <li>New Product</li>
          </ul>
        </nav>
        <main className={styles.main}>
          <h2>Carts</h2>
          <div className={styles.cardContainer}>
            {carts.map((cart) => (
              <div key={cart.id} className={styles.card}>
                <h3>Cart ID: {cart.id}</h3>
                <p>Usuario ID: {cart.userId}</p>
                <p>Fecha: {cart.date}</p>
                <h4>Productos:</h4>
                <div className={selectedCart === cart ? styles.show : styles.hide}>
                  {selectedCart === cart && <ProductList products={cart.products} />}
                </div>
                <button
                  onClick={() => handleShowProducts(cart)}
                  className={`${styles.button} ${styles.showProductsButton}`}
                >
                  {selectedCart === cart ? 'Ocultar productos' : 'Mostrar productos'}
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
      <footer className={styles.footer}>BYGALGO ALIAS FRANS SEBASTIAN VILLAMIZAR</footer>
    </div>
  );
}
