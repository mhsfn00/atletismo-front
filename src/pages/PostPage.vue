<script setup>
import { useRoute } from 'vue-router';
const currentPost = useRoute().query; // Using query as if it were props
</script>

<template>
    <div class="page-container">
        <div class="image-container">
            <img class="image" :src=currentPost.image alt="Post Image" />
        </div>
        <div class="text-container">
            <div class="header-container">
                <h3>{{ currentPost.title }}</h3>
                <p>{{ currentPost.date }}</p>
            </div>
            <div class="article-container">
                {{ currentPost }} {{ currentPost }} {{ currentPost }}
                {{ currentPost }} {{ currentPost }} {{ currentPost }}
            </div>
        </div>
    </div>
</template>

<style scoped>
    .text-container {
        margin-left: 1vw;
    }

    .page-container {
        margin: 0 6vw;
    }

    .image {
        width: 260px;
        height: 300px;
    }
</style>