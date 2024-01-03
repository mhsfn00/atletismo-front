<script setup>
import { storeToRefs } from 'pinia'; // Importing stuff to use PostsStore
import { usePostsStore } from '../stores/PostsStore.js'

const { mainPost, secondaryPosts, extraPosts } = storeToRefs(usePostsStore()); // Getting the posts variable from PostStore
const { getPosts } = usePostsStore(); // Getting the getPosts action from PostStore

getPosts(); // Using getPosts to make the request to the backend and store posts in PostsStore
</script>

<template>
    <div class="page-container">
        <div class="posts-container">
            <div class="main-posts-container">
                <div class="main-post-card">
                    <router-link class="link-nostyling" :to="{path:`post/${mainPost.id}`}">
                        <img class="main-post-image" :src="mainPost.image" />
                    </router-link>
                </div>
                <div class="secondary-posts-container">
                    <div class="secondary-post-card" v-for="post in secondaryPosts" :key="post.id">
                        <router-link class="link-nostyling" :to="{path:`post/${post.id}`}">
                            <img class="post-image" :src="post.image" />
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="extra-posts-container">
                <div class="post-card" v-for="post in extraPosts" :key="post.id">
                    <router-link class="link-nostyling" :to="{path:`post/${post.id}`}">
                        <img class="post-image" :src="post.image" />
                    </router-link>
                </div>
            </div>
        </div>
    </div>    
</template>

<style scoped>
.main-post-image {
    height: 52vh;
}

.post-image {
    height: 26vh; /* half of main image */
}

.post-card {
    background-color: lightgray;
    width: 33%;
}

.secondary-post-card {
    background-color: lightgray;
    width: 100%;
}

.main-post-card {
    background-color: lightblue;
    width: 67%;
}

.main-posts-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 1%;
}

.secondary-posts-container {
    display: flex;
    flex-direction: column;
    width: 33%;
    gap: 15px;
}

.extra-posts-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 1%;
}

.posts-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75%;
    gap: 15px;
}
</style>