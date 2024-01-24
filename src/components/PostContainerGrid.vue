<script setup>
import { storeToRefs } from 'pinia'; // Importing stuff to use PostsStore
import { usePostsStore } from '../stores/PostsStore.js'

const { posts } = storeToRefs(usePostsStore()); // Getting the posts variable from PostStore
const { getPosts } = usePostsStore(); // Getting the getPosts action from PostStore

getPosts(); // Using getPosts to make the request to the backend and store posts in PostsStore

console.log('main ', posts);
</script>

<template>
    <div class="page-container">
        <div class="posts-container">
            <div class="main post">
                0
            </div>
            <div class="one secondary post">
                1
            </div>
            <div class="two secondary post">
                2
            </div>
            <div class="three secondary post">
                3
            </div>
            <div class="four secondary post">
                4
            </div>
            <div class="five secondary post">
                5
            </div>
        </div>
    </div>    
    <!--
        <div v-if="index == 0" class="big">
            <router-link class="link-nostyling" :to="{path:`post/${post.id}`}">
                <img class="main-post-image" :src="`https://lh3.google.com/u/0/d/${post.imageId}`" />
            </router-link>
        </div>
      -->
</template>

<style scoped>
.main {
    width: 410px;
    height: 410px;
}

.post {
    border: 2px solid black;
}

.secondary {
    width: 200px;
    height: 200px;
}

.posts-container {
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    background-color: #ccc;
}

.main-post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.main {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
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
}

@media screen and (max-width: 1366px) {
    
}
</style>