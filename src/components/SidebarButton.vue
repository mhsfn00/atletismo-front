<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps({
    title: { type: String, default: 'home'},
    address: { type: String, default: '/'},
    iconAddress: { type: String, default: ''},
    isCurrentPage: { type: Boolean, default:  false},
});
</script>

<template>
    <router-link class="link-container" :to="address">
        <div 
            :class="{'button-container-highlighted': isCurrentPage, 
                    'button-container': !isCurrentPage }"
        >
            <div class="icon-container">
                <img :src="iconAddress" />
            </div>
            <div class="text-container">
                <label class="title">{{ title }}</label>
            </div>
        </div>
    </router-link>
</template>

<style scoped>
.title {
    text-transform: uppercase;
    font-weight: bold;
}

.text-container {
    width: 60%;
    justify-content: left;
}

.icon-container {
    width: 40%;
    justify-content: center;
}

.icon-container, .text-container {
    display: flex;
    align-items: center;
}

.button-container {
    display: flex;
    padding: 1vh 2vw;
}

.button-container-highlighted {
    background-image: linear-gradient(to right, var(--primary-orange) 80%, transparent);
    display: flex;
    padding: 1vh 2vw;
}
</style>