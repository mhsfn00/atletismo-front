<script setup lang="ts">
import { defineEmits } from 'vue';
import { RouterLink } from 'vue-router';

defineProps ({
    imageSource: { type: String, default: '' },
    type: { type: String, default: 'function' },
    address: { type: String, default: '/'},
    execute: { type: String, default: 'a function'},
})

const emit = defineEmits(['lmb-click']);
const handleClick = () => {
    emit('lmb-click');
}
</script>

<template>
    <router-link v-if="type === 'navegation'" :to="address">
        <div class="button-container">
            <img class="icon" :src="imageSource" />
        </div>
    </router-link>
    <div v-else-if="type === 'function'" class="button-container" @click="handleClick">
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
