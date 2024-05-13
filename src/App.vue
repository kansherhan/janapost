<template>
  <main class="root-wrapper">
    <div class="container">
      <RouterView />
    </div>

    <SelectedCountry />
  </main>
</template>

<script setup>
import SelectedCountry from "./components/SelectedCountry.vue";
</script>
