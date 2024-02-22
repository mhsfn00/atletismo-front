<script setup>
import { defineProps } from 'vue';

defineProps({
    post: {},
    mainPost: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <router-link class="link-nostyling image-container" :to="{path:`post/${post.id}`}">
        <img src="//live.staticflickr.com/5021/5618703271_c8231cfe1c_h.jpg" class="post-image" />
        <div class="shadow-overlay"></div>
        <div class="overlay-text">
            <p>{{ "Track and Field | " + post.date }}</p>
            <p v-if="mainPost" class="main-title">{{ post.title }}</p>
            <p v-else class="title">{{ post.title }}</p>
        </div>
    </router-link>
</template>

<style scoped>
.main-title {
    font-size: xx-large;
}

.title {
    font-size: x-large;
}

.overlay-text {
    position: absolute;
    left: 2%;
    bottom: 5%;
    font-weight: bold;
}

.image-container:hover {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, black 100%);
    height: 100%;
    border-radius: 3px;
}

.image-container {
    position: relative;
    color: white;
    display: flex;
    width: 100%;
    height: 100%;
}

.shadow-overlay {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, black 100%);
    position: absolute;
    width: 100%;
    height: 40%;
    bottom: 0;
    border-radius: 3px;
}

.post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px;
    position: relative;
    z-index: -1;
}
</style>