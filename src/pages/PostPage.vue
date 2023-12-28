<script setup>
import { useRoute } from 'vue-router'; // Importing useRoute to get the post id from the current route
import { usePostsStore } from '../stores/PostsStore.js'; // Same stuff used on PostContainerGrid to get data from PostsStore
import { storeToRefs } from 'pinia';

const currentPostId = useRoute().params.postId;
const { getPostWithId } = usePostsStore();
const { currentPost } = storeToRefs(usePostsStore());

getPostWithId(currentPostId); // This action makes a request to the backend to get one specific post
// Decided to make a request to the server here aswell for the cases in which the user will access
// a post link directly, without running through the home page first. Also even the home page probably wont
// load ALL posts by default.
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

    .image {
        width: 260px;
        height: 300px;
    }
</style>