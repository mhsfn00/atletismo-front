<script setup>
import { storeToRefs } from 'pinia'; // Importing stuff to use PostsStore
import { usePostsStore } from '../stores/PostsStore.js'

const { posts } = storeToRefs(usePostsStore()); // Getting the posts variable from PostStore
const { getPosts } = usePostsStore(); // Getting the getPosts action from PostStore

getPosts(); // Using getPosts to make the request to the backend and store posts in PostsStore
</script>

<template>
    <div class="page-container">
        <router-link v-for="post in posts" :key="post.id" :to="{ path:`post/${post.id}`}">
            <div class="post-container">
                <img class="post-image" :src="post.image" />
            </div>
        </router-link>
    </div>  
</template>

<style scoped>
    .post-container {
        background-color: lightgray;
    }

    .page-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
    }

    .post-image {
        width: 20vw;
        height: 20vh;
    }
</style>

<!-- .main-post-image {
    width: 260px;
    height: 300px;
}

.post-container {
    display: grid;
    padding: 0 10vw;
    gap: 20px;
    align-items: center;
    justify-content: center;
}

.main {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
}

.post {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: var(--verde-main); */
    border: 1px solid black;
    border-radius: 6px;
}

.secondary {
    width: 28vw;
    height: 12vw;
}

.secondary-image {
    width: 130px;
    height: 150px;
}

.one {
    display: flex;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
}

.two {
    display: flex;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
}

.three {
    display: flex;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
}

.four {
    display: flex;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
}

.five {
    display: flex;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
} -->