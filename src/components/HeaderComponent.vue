<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import HeaderButton from './HeaderButton.vue'
import SideBar from './SideBar.vue';

const route = useRoute();
const title = computed(() => route.name);
</script>

<template>
    <div class="header-container">
        <HeaderButton 
          :imageSource="'/images/logo.png'"
          :type="'navegation'"
          :address="'/'"
        />
        <span class="title">{{ title }}</span>
        <HeaderButton 
          :imageSource="'/images/menu.png'"
          :type="'function'"
          :execute="'toggleSidebar'"
        />
    </div>
    <SideBar />
</template>

<style scoped>
.title {
  text-transform: uppercase;
  font-size: small;
  padding-top: 4vh;
}

.header-container {
  background-color: var(--primary-green);
  color: var(--primary-black);
  position: absolute;
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
}
</style>
