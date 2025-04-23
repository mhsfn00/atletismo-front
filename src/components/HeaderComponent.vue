<script setup lang="ts">
import HeaderButton from './HeaderButton.vue'
</script>

<template>
    <div class="header-container">
        <HeaderButton :imageSource="'/public/images/logo.png'"/>
        <HeaderButton :imageSource="'/public/images/menu.png'"/>
    </div>
</template>

<style scoped>
.header-container {
  background-color: var(--primary-green);
  color: var(--primary-black);
  position: absolute;
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
