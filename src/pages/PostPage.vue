<script setup>
import { useRoute } from 'vue-router'; // Importing useRoute to get the post id from the current route
import { usePostsStore } from '../stores/PostsStore.js'; // Same stuff used on PostContainerGrid to get data from PostsStore
import { storeToRefs } from 'pinia';
import { defineProps } from 'vue';

const currentPostId = useRoute().params.postId;
const { getPostWithId } = usePostsStore();
const { currentPost } = storeToRefs(usePostsStore());

getPostWithId(currentPostId);
 // This action makes a request to the backend to get one specific post
// Decided to make a request to the server here aswell for the cases in which the user will access
// a post link directly, without running through the home page first. Also even the home page probably wont
// load ALL posts by default.

const props = defineProps({
    loggedUser: {}
});
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
        <button v-if="props.loggedUser" class="edit-button">Editar</button>
    </div>
</template>

<style scoped>
    .edit-button {
        position: fixed;
        top: 15%;
        right: 10%;
        width: 5vw;
        height: 5vh;
        cursor: pointer;
        background-color: lightblue;
        border-radius: 6px;
    }

    .text-container {
        margin-left: 1vw;
    }

    .image {
        width: 260px;
        height: 300px;
    }
</style>