<script setup lang="ts">
import SidebarButton from './SidebarButton.vue';

defineProps({
    currentPage: { type: String, default: ''}
});
</script>

<template>
    <div class="sidebar-container">
        <SidebarButton 
            :address="'/'"
            :title="'Início'"
            :icon-address="'/images/home.png'"
            :isCurrentPage="'home' === currentPage"
        />
        <SidebarButton 
            :address="'/about'"
            :title="'Sobre'"
            :icon-address="'/images/home.png'"
            :isCurrentPage="'about' === currentPage"
        />
        <SidebarButton 
            :address="'/roster'"
            :title="'Atletas'"
            :icon-address="'/images/home.png'"
            :isCurrentPage="'roster' === currentPage"
        />
        <SidebarButton 
            :address="'/coaches'"
            :title="'Treinadores'"
            :icon-address="'/images/home.png'"
            :isCurrentPage="'coaches' === currentPage"
        />
        <SidebarButton 
            :address="'/events'"
            :title="'Eventos'"
            :icon-address="'/images/home.png'"
            :isCurrentPage="'events' === currentPage"
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