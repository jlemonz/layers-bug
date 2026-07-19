<script setup lang="ts">
const message = useBaseMessage()
</script>

<template>
  <div class="base-banner">
    {{ message }}
  </div>
</template>

<style scoped>
.base-banner {
  padding: 0.75rem 1rem;
  border: 1px solid currentColor;
  border-radius: 0.5rem;
  font-family: system-ui, sans-serif;
}
</style>
