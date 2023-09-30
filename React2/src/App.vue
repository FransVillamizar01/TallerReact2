<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { createRouter, createWebHistory } from 'vue-router';

// Configura las rutas
const routes = [
  { path: '/', component: Home },
  { path: '/carts', component: CartList },
  { path: '/carts/:id', component: CartDetail },
  { path: '/products', component: ProductList },
  { path: '/products/:id', component: ProductDetail },
  { path: '/create-cart', component: CreateCart },
  { path: '/create-product', component: CreateProduct }
];

// Crea el enrutador
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Componentes
const Home = {
  template: '<div>Welcome to My Store App!</div>',
};

const CartList = {
  template: `
    <div>
      <h2>Cart List Page</h2>
      <!-- Aquí puedes listar los carritos -->
    </div>
  `,
};

const CartDetail = {
  template: `
    <div>
      <h2>Cart Detail Page</h2>
      <!-- Aquí puedes mostrar el detalle de un carrito específico -->
    </div>
  `,
};

const ProductList = {
  template: `
    <div>
      <h2>Product List Page</h2>
      <!-- Aquí puedes listar los productos -->
    </div>
  `,
};

const ProductDetail = {
  template: `
    <div>
      <h2>Product Detail Page</h2>
      <!-- Aquí puedes mostrar el detalle de un producto específico -->
    </div>
  `,
};

const CreateCart = {
  template: `
    <div>
      <h2>Create Cart Page</h2>
      <!-- Aquí puedes agregar la lógica para crear carritos -->
    </div>
  `,
};

const CreateProduct = {
  template: `
    <div>
      <h2>Create Product Page</h2>
      <!-- Aquí puedes agregar la lógica para crear productos -->
    </div>
  `,
};
</script>
