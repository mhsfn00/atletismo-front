<script setup>
import { defineProps, ref } from 'vue';
import { focusOnField } from '@/helpers/helpers';

const imageLink = ref(null); 

const props = defineProps ({
    loggedUser: null 
});

// Setup to work with a google drive sharing link
function getImageIdFromShareLink (imageShareLink) {
    const imageIdStartIndex = imageShareLink.indexOf('/d/') + 3;
    const imageIdEndIndex = imageShareLink.indexOf('/view');
    const imageId = imageShareLink.substring(imageIdStartIndex, imageIdEndIndex);

    return (imageId);
}

function loadImagePreview() {
    const imageShareLink = document.getElementById("imageLink").value;
    const imageId = getImageIdFromShareLink(imageShareLink);

    imageLink.value = `https://lh3.google.com/u/0/d/${imageId}`;
}

function saveNewPost() {
    // Validate for empty fields (its own function?)
    const imageShareLink = document.getElementById("imageLink").value;
    if (!imageShareLink) {
        alert("Link para imagem obrigatório");
        return; 
    }
    const imageId = getImageIdFromShareLink(imageShareLink);

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
        imageId : imageId,
        title: title,
        text: text, 
    }

    console.log(newPost);
}
</script>

<template>
    <div v-if="props.loggedUser">
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
    <div v-else>
        <h1>Login needed</h1>
    </div>
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