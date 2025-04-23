<script setup lang="ts">
defineProps ({
    imageSource: { type: String, default: '' }
})
</script>

<template>
  <div class="button-container">
      <img class="icon" :src="imageSource" />
  </div>
</template>

<style scoped>
.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
    padding: 0 10px;
}

.icon {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
