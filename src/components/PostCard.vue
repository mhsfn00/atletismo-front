<script setup lang="ts">
defineProps({
    post: { type: Object, default: () => ({}) }
})
</script>

<template>
    <div :class="['card-container', { main: post.mainPost }]">
        <div class="image-container">
            <img class="image" :src="post.imageAddress">
        </div>
        <div class="text-container">
            <p>{{ post.title }}</p>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    padding: 1vh 0;
    border-bottom: 2px solid var(--primary-black);
}
.main {
    flex-direction: column;
}

.image {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.text-container {
    background-color: lightblue;
}

.image-container {
    width: 100%;
    height: 100px;
}
</style>