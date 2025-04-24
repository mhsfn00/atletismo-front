<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps({
    text: { type: String, default: 'home'},
    address: { type: String, default: '/'},
    iconAddress: { type: String, default: ''},
});
</script>

<template>
    <router-link :to="address">
        <div class="button-container">
            <img :src="iconAddress" />
            <label class="text">{{ text }}</label>
        </div>
    </router-link>
</template>

<style scoped>

</style>