    // ProductList.js
    import React from 'react';
    import './ProductList.css'; // Importa el archivo CSS

    export default function ProductList({ products }) {
    return (
        <div className="product-list-container">
        <h2 className="product-list-header">Lista de Productos</h2>
        <ul className="product-list">
            {products.map((product, index) => (
            <li key={index}>
                Producto ID: {product.productId}, Cantidad: {product.quantity}
            </li>
            ))}
        </ul>
       </div>
      );
    }