<script setup lang="ts">
interface Props {
  image: string;
  title: string;
}
defineProps<Props>();
</script>

<template>
  <div class="col-6 col-md-3 q-pa-xl">
    <q-card class="hover-move">
      <q-img :src="image" class="cursor-pointer" @click="$router.push('/catalog')" fit="contain" ratio="0.7">
        <div class="absolute-bottom text-subtitle1 text-center">{{ title }}</div>
      </q-img>
    </q-card>
  </div>
</template>
