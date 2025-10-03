<script setup lang="ts">
import { Product } from '../types';

const route = useRoute();
const { getProductById, getProductsByCategory } = useProducts();

const product = getProductById(parseInt(route.params.id));

const similarProducts = computed(() => getProductsByCategory(product.category)
  .filter(p => p.id !== product.id)
  .slice(0, 4)
);
</script>

<template>
  <div class="q-pa-lg q-mb-xl" v-if="product">
    <q-breadcrumbs class="q-mb-lg">
      <q-breadcrumbs-el label="Главная" to="/" />
      <q-breadcrumbs-el label="Каталог" to="/catalog" />
      <q-breadcrumbs-el :label="product.title" />
    </q-breadcrumbs>

    <div class="row q-col-gutter-xl">
      <div class="col-12 col-md-5">
        <q-card>
          <q-img :src="product.image" :alt="product.title" ratio="1" fit="contain">
            <template v-slot:loading>
              <div class="absolute-full flex flex-center">
                <q-spinner-gears color="primary" size="xl" />
              </div>
            </template>
          </q-img>
        </q-card>
      </div>

      <div class="col-12 col-md-7">
        <div class="column q-gutter-y-lg">
          <div>
            <h1 class="text-h4 text-weight-bold q-mb-sm">{{ product.title }}</h1>
            <div class="row items-center q-gutter-x-md">
              <div class="row items-center">
                <q-icon name="star" color="orange" size="20px" />
                <span class="text-h6 q-ml-xs">{{ product.rating.rate }}</span>
              </div>
              <span class="text-grey">({{ product.rating.count }} отзывов)</span>
              <q-badge :label="product.category" color="primary" class="q-px-md q-py-sm"/>
            </div>
          </div>

          <div class="text-h3 text-primary text-weight-bold">
            ${{ product.price }}
          </div>

          <div>
            <h3 class="text-h6 q-mb-sm">Описание</h3>
            <p class="text-body1">{{ product.description }}</p>
          </div>

          <div class="row q-gutter-md">
            <q-btn outline color="primary" label="Назад в каталог" :to="'/catalog'" size="lg" />
          </div>
        </div>
      </div>
    </div>

    <div class="q-mt-xl">
      <h2 class="text-h5 q-mb-md">Похожие товары</h2>
      <div class="row q-col-gutter-lg">
        <ProductCard v-for="product in similarProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </div>

  <div v-else class="absolute-full flex flex-center">
    <q-spinner-gears color="primary" size="xl" />
  </div>
</template>
