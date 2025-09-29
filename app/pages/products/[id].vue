<script setup>
const route = useRoute();
const { getProductById } = useProducts();
const product = getProductById(route.params.id);
</script>

<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>Цена: {{ product.price }} руб.</p>
    <p>Описание: {{ product.description }}</p>
    <NuxtLink to="/catalog">← Назад в каталог</NuxtLink>
  </div>
</template>
