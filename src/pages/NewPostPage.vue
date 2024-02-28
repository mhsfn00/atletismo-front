<script setup>
import { ref } from 'vue';
import { focusOnField } from '@/helpers/helpers';
import { useUsersStore } from '@/stores/UsersStore';
import NonAuthWarning from '@/components/NonAuthWarning.vue';

const usersStore = useUsersStore();
const imageLink = ref(null); 

function loadImagePreview() {
    imageLink.value = document.getElementById("imageLink").value;
}

function saveNewPost() {
    // Validate for empty fields (its own function?)
    const imageLink = document.getElementById("imageLink").value;
    if (!imageLink) {
        alert("Link para imagem obrigatório");
        return; 
    }

    const title = document.getElementById("title").value;
    if (!title) {
        alert("Título é obrigatório");
        return;
    }

    const text = document.getElementById("text").value;
    if (!text) {
        alert("Texto é obrigatório");
        return;
    }

    // Saving
    const newPost = {
        imageLink : imageLink,
        title: title,
        text: text, 
    }

    console.log(newPost);
}
</script>

<template>
    <div v-if="usersStore.loggedUser">
        <div class="page-container">
            <div class="imageId-container">
                Link de compartilhamento <input class="text-input" type="text" id="imageLink" @keyup.enter="focusOnField('previewButton')" />
                <button class="button action" id="previewButton" @click="loadImagePreview" @keyup.enter="focusOnField('title')">Preview</button>
            </div>
            <div class="image-container">
                <div v-if="imageLink">
                    <img class="image" id="image" :src="imageLink" referrerpolicy="no-referrer"/>
                </div>
                <div v-else>
                    <h2>Forneça o link de compartilhamento da imagem (Google drive)</h2>
                </div>
            </div>
            <div class="text-container">
                <div class="title-container">
                    Título <input class="text-input" type="text" id="title" @keyup.enter="focusOnField('text')" />
                </div>
                <div class="article-container">
                    Artigo <textarea class="text-input" type="text" id="text" @keyup.enter="focusOnField('confirm')" />
                </div>
            </div>
            <div class="buttons-container">
                <button class="button cancel" id="cancel">Cancelar</button>
                <button class="button confirm" id="confirm" @click="saveNewPost">Enviar</button>
            </div>
        </div>
    </div>
    <NonAuthWarning v-else />
</template>

<style scoped>
    .buttons-container {
        display: flex;
        gap: 10px;
        margin-top: 10px;
    }

    .image {
        height: 40vh;
    }

    .image-container {
        height: 40vh;
        background-color: rgb(228, 228, 228);
        margin-bottom: 10px;
        display: flex; 
        align-items: center; 
        justify-content: center;
    }

    .article-container {
        display: flex;
        gap: 5px;
        height: 20vh;
    }

    .text-input {
        flex-grow: 1;
    }

    .imageId-container {
        margin-bottom: 10px;
        display: flex;
        gap: 5px;
    }

    .title-container {
        display: flex;
        gap: 5px;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
</style>