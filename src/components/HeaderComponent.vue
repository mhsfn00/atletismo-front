<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import HeaderButton from './HeaderButton.vue'
import SideBar from './SideBar.vue';

const route = useRoute();
const title = computed(() => route.name);

const sideBarVisible = ref<boolean>(false);
const toggleSidebar = () => {
  console.log("handled event");
  sideBarVisible.value = !sideBarVisible.value;
}
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
          @lmb-click="toggleSidebar"
        />
    </div>
    <SideBar v-show="sideBarVisible" :currentPage="title?.toString()" />
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
