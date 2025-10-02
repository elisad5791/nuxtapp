<script setup>
defineProps(['icon', 'title', 'text']);
</script>

<template>
  <div class="col-12 col-md-4">
    <q-card flat class="text-center">
      <q-card-section>
        <q-icon :name="icon" size="xl" color="primary" class="q-mb-sm" />
        <h3 class="text-h6">{{ title }}</h3>
        <p>{{ text }}</p>
      </q-card-section>
    </q-card>
  </div>
</template>
