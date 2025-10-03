<script setup lang="ts">
const { products } = useProducts();
</script>

<template>
  <div class="q-pa-lg q-mb-xl">
    <div class="text-center q-mb-xl">
      <h1 class="text-h3 text-weight-bold q-mb-md">Каталог товаров</h1>
      <p class="text-h6 text-grey-7">Все товары в одном месте</p>
      <q-badge color="primary" class="q-mt-sm">
        {{ products.length }} товаров
      </q-badge>
    </div>

    <div class="row q-col-gutter-lg">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
