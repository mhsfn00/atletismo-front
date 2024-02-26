<script setup>
import { useRoute } from 'vue-router';
import { usePostsStore } from '@/stores/PostsStore.js';
import { useUsersStore } from '@/stores/UsersStore';
import { ref, onMounted } from 'vue';

const currentPostId = useRoute().params.postId;
const postsStore = usePostsStore();
const usersStore = useUsersStore();

onMounted(async () =>  {
    await postsStore.getPostWithId(currentPostId);
});

const editAvailable = ref(false);
const modifiablePost = ref(null); 

function enableEdit() {
    modifiablePost.value = postsStore.currentPost;
    editAvailable.value = true;    
}

function cancelEdit() {
    modifiablePost.value = null;
    editAvailable.value = false;
}

async function saveEdit() {
    const response = await postsStore.editPostWithId({
        id: currentPostId,
        imageLink: document.getElementById("newImageLink").value,
        title: document.getElementById("newTitle").value,
        text: document.getElementById("newText").value,
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
            <img class="image" :src="`${postsStore.currentPost.imageLink}`" alt="Post Image" />
        </div>
        <div class="text-container">
            <div class="header-container">
                <h3>{{ postsStore.currentPost.title }}</h3>
                <p>{{ postsStore.currentPost.date }}</p>
            </div>
            <div class="article-container">
                {{ postsStore.currentPost.text }}
            </div>
            <div v-if="postsStore.currentPost.lastModified" class="footer-container">
                <p> Editado pela última vez em {{ postsStore.currentPost.lastModified }}</p>
            </div>
        </div>
        <div class="buttons-container">
            <button class="action button" v-if="usersStore.loggedUser" @click="enableEdit">Editar</button>
        </div>
    </div>
    <div v-else class="page-container">
        <div class="image-container">
            <img class="image" :src=modifiablePost.imageLink alt="Post Image" />
            Link da imagem (google drive)
            <input type="text" :value="modifiablePost.imageLink" id="newImageLink">
        </div>
        <div class="text-container">
            <div class="header-container">
                <input type="text" :value="modifiablePost.title" id="newTitle">
            </div>
            <div class="article-container">
                <textarea :value="modifiablePost.text" id="newText"></textarea>
            </div>
        </div>
        <div class="buttons-container">
            <button class="cancel button" @click="cancelEdit">Cancelar</button>
            <button class="confirm button" @click="saveEdit">Salvar</button>
        </div>
    </div>
</template>

<style scoped>
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