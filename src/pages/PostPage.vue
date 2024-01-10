<script setup>
import { useRoute } from 'vue-router'; // Importing useRoute to get the post id from the current route
import { usePostsStore } from '../stores/PostsStore.js'; // Same stuff used on PostContainerGrid to get data from PostsStore
import { storeToRefs } from 'pinia';
import { defineProps, ref } from 'vue';

const currentPostId = useRoute().params.postId;
const { getPostWithId, editPostWithId } = usePostsStore();
const { currentPost } = storeToRefs(usePostsStore());

getPostWithId(currentPostId);
// This action makes a request to the backend to get one specific post
// Decided to make a request to the server here aswell for the cases in which the user will access
// a post link directly, without running through the home page first. Also even the home page probably wont
// load ALL posts by default.

const editAvailable = ref(false);
const modifiablePost = ref(null); 

const props = defineProps({
    loggedUser: {}
});


function enableEdit() {
    modifiablePost.value = currentPost.value;
    editAvailable.value = true;    
}

function cancelEdit() {
    modifiablePost.value = null;
    editAvailable.value = false;
}

async function saveEdit() {
    const response = await editPostWithId({
        id: currentPostId,
        imageLink: modifiablePost.value.imageLink,
        title: modifiablePost.value.title,
        text: 'new text again',
    });

    if (response.modifiedCount === 1) {
        alert ('Post modified successfully');
        editAvailable.value = false;
        window.location.reload();
    } else {
        console.log(response);
        alert ('Something went wrong, check log');
    }
}
</script>

<template>
    <div v-if="!editAvailable" class="page-container">
        <div class="image-container">
            <img class="image" :src=currentPost.imageLink alt="Post Image" />
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
            <div v-if="currentPost.lastModified" class="footer-container">
                <p> Editado pela última vez em {{ currentPost.lastModified }}</p>
            </div>
        </div>
        <div class="buttons-container">
            <button class="action button" v-if="props.loggedUser" @click="enableEdit">Editar</button>
        </div>
    </div>
    <div v-else class="page-container">
        <div class="image-container">
            <img class="image" :src=modifiablePost.imageLink alt="Post Image" />
            Link da imagem (google drive)
            <input type="text" :value="modifiablePost.imageLink">
        </div>
        <div class="text-container">
            <div class="header-container">
                <input type="text" :value="modifiablePost.title">
            </div>
            <div class="article-container">
                <textarea></textarea>
            </div>
        </div>
        <div class="buttons-container">
            <button class="cancel button" @click="cancelEdit">Cancelar</button>
            <button class="confirm button" @click="saveEdit">Salvar</button>
        </div>
    </div>
</template>

<style scoped>
    .button {
        width: 5vw;
        height: 5vh;
        cursor: pointer;
        border-radius: 6px;
        border: 0;
        font-weight: 700;
    }

    .buttons-container {
        position: fixed;
        top: 15%;
        right: 10%;
        display: flex;
        gap: 10px;
    }

    .text-container {
        margin-left: 1vw;
    }

    .footer-container {
        margin-top: 5px;
        display: flex;
        justify-content: right;
        align-items: center;
    }

    .image {
        width: 260px;
        height: 300px;
    }
</style>