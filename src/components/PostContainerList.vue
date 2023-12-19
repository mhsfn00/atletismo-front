<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);

onMounted(() => {
    getPosts();
});

async function getPosts() {
    try {
        const url = '/api/posts';
        const response = await axios.get(url);
        posts.value = response.data;
    } catch (err) {
        console.log(err.response);
    }
}
</script>

<template>
    <div class="container-page">
        <div class="post-card" v-for="post in posts" :key="post.id">
            <router-link class="link-nostyling" :to="{path:`post/${post.id}`}">
                <div class="image-container">
                    <img class="post-image" :src="post.image" />
                </div>
                <div class="footer-container">
                    <h2>
                        {{ post.title }}
                    </h2>
                    <p>
                        {{ post.date }}
                    </p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
    .post-card {
        background-color: lightgray;
        width: 100%;
    }

    .container-page {
        margin: 0 6vw;
        align-items: center;

        display: flex;
        flex-direction: column;
        gap: 2vh;
    }

    .post-image {
        height: 36vh;
    }
</style>