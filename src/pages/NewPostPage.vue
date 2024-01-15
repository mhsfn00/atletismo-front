<script setup>
import { defineProps, ref } from 'vue';

const imageLink = ref(null); 

const props = defineProps ({
    loggedUser: null 
});

function loadImagePreview() {
    // Therhe's probably a better way of doing this
    const imageShareLink = document.getElementById("imgId").value;
    const splitLink =  imageShareLink.split('/d/');
    const secondPart = splitLink[1];
    const secondPartSplit = secondPart.split('/view?');
    const imageId = secondPartSplit[0];

    imageLink.value = `https://lh3.google.com/u/0/d/${imageId}`;
}
</script>

<template>
    <div v-if="props.loggedUser">
        <div class="page-container">
            <div class="imageId-container">
                Link de compartilhamento <input class="text-input" type="text" id="imgId" />
                <button class="button action" @click="loadImagePreview">Preview</button>
            </div>
            <div class="image-container">
                <div v-if="imageLink">
                    <img class="image" :src="imageLink" referrerpolicy="no-referrer"/>
                </div>
                <div v-else>
                    <h2>Forneça um id para imagem</h2>
                </div>
            </div>
            <div class="text-container">
                <div class="title-container">
                    Título <input class="text-input" type="text" id="title" />
                </div>
                <div class="article-container">
                    Artigo <textarea class="text-input" type="text" id="text" />
                </div>
            </div>
            <div class="buttons-container">
                <button class="button cancel">Cancelar</button>
                <button class="button confirm">Enviar</button>
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