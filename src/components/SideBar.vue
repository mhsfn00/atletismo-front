<script setup lang="ts">
import SidebarButton from './SidebarButton.vue';

</script>

<template>
    <div class="sidebar-container">
        <SidebarButton 
            :address="'/'"
            :text="'Início'"
            :icon-address="'/images/home.png'"
        />
        <SidebarButton 
            :address="'/about'"
            :text="'Sobre'"
            :icon-address="'/images/home.png'"
        />
    </div>
</template>

<style scoped>
.sidebar-container {
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: 90vh;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 4;
    background-image: linear-gradient(to bottom, var(--primary-green) 50%, transparent);
    padding-top: 10vh;
}
</style>