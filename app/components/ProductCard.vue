<script setup>
defineProps(['product']);
</script>

<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <q-card class="hover-move cursor-pointer" @click="$router.push(`/products/${product.id}`)">
      <q-img :src="product.image" :alt="product.title" ratio="1" fit="contain">
        <template v-slot:loading>
          <q-spinner-gears color="primary" />
        </template>
      </q-img>

      <q-card-section class="q-pt-md">
        <div class="text-subtitle2 text-weight-medium product-title line-clamp-2">
          {{ product.title }}
        </div>

        <div class="row items-center q-mt-sm">
          <div class="text-h6 text-primary text-weight-bold">${{ product.price }}</div>
          <q-space />
          <div class="row items-center">
            <q-icon name="star" color="orange" size="16px" />
            <span class="text-caption q-ml-xs">{{ product.rating.rate }}</span>
          </div>
        </div>

        <q-badge :label="product.category" color="grey-3" text-color="grey-8" class="q-mt-sm"/>
      </q-card-section>

      <q-card-actions>
        <q-btn color="primary" label="Подробнее" no-caps class="full-width" @click.stop="$router.push(`/products/${product.id}`)" />
      </q-card-actions>
    </q-card>
  </div>
</template>
