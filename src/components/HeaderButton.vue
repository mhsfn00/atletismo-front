<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps ({
    imageSource: { type: String, default: '' },
    type: { type: String, default: 'function' }
})
</script>

<template>
    <router-link to="/">
        <div class="button-container">
            <img class="icon" :src="imageSource" />
        </div>
    </router-link>
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
