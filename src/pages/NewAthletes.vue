<script setup>
const defaultPictureLink = "//storage.needpix.com/rsynced_images/blank-profile-picture-973460_1280.png";

const newPersons = [
    {
        pictureLink: '',
        name: '',
        height: '',
        weight: '',
        events: '',
        year: '',
        city: '',
        state: '',
        highschool: ''
    }
];
</script>

<template>
    <div class="page-container">
        <div class="person-card" v-for="(person, index) in newPersons" :key="index">
            <div class="input-container">
                <label class="input-label" for="pictureLink">Link para foto</label> 
                <span class="input-span">
                    <input class="input-actual" v-model="newPersons[index].pictureLink" id="pictureLink">
                </span>
            </div>
            <div class="person-info">
                <div class="picture-container">
                    Preview <img class="person-picture" :src="`${defaultPictureLink}`" />
                </div>
                <div class="attributes-container">
                    <div>Nome <input /></div>
                    <div>Altura <input /></div>
                    <div>Peso <input /></div>
                    <div>Provas <input /></div>
                </div>
                <div class="info-container">
                    <div>Ano <input /></div>
                    <div>Cidade <input /></div>
                    <div>Estado <input /></div>
                    <div>Ensino <input /></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* global.css */
.input-label {
    float: left;
}

.input-span {
    display: flex;
    overflow: hidden;
    padding-left: 10px;
}

.input-actual {
    width: 100%;
}

.input-container {
    width: 100%;
    background: rgb(235, 235, 235);
}
/* global.css */

.person-card {
    display: flex;
    flex-direction: column;
}

.info-container {
    display: flex;
    flex-direction: column;
}

.attributes-container {
    display: flex;
    flex-direction: column;
}

.picture-container {
    display: flex;
    flex-direction: column;
}

.person-info {
    display: grid;
    grid-template-columns: 15% 43% 42%;
}

.person-picture {
    width: 80px;
    height: 100px;
    align-self: center;
    margin-left: 20px;
    cursor: pointer;
}
</style>