<script setup>
import { defineProps } from 'vue';
const defaultPictureLink = "//storage.needpix.com/rsynced_images/blank-profile-picture-973460_1280.png";

defineProps ({
    person: {},
    user: {},
});
</script>

<template>
    <div v-if="user" class="person-card-editable">
        <div class="left-side">
            <img class="person-picture" :src="`${person.pictureLink || defaultPictureLink}`" />
            <div class="picture-and-buttons-editable">
                <div class="attributes-name">
                    <div class="name">
                        {{ person.name }}
                    </div>
                </div>
                <div v-if="user" class="button-container">
                    <button class="button cancel remove">Remover</button>
                    <button class="button action edit">Editar</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="person-card">
        <div class="left-side">
            <img class="person-picture" :src="`${person.pictureLink || defaultPictureLink}`" />
            <div class="attributes-name">
                <div class="attributes">
                    {{ person.height }} cm / {{ person.weight }} kg / {{ person.events }}
                </div>
                <div class="name">
                    {{ person.name }}
                </div>
            </div>
        </div>
        <div class="right-side">
            {{ person.year }}º Ano / Cidade, Estado / Ensino Médio
        </div>
    </div>
</template>

<style scoped>
.picture-and-buttons-editable {
    display: flex;
    align-items: center;
}

.person-card-editable {
    width: 100%;
}

.button-container {
    display: flex;
    gap: 15px;
}

.left-side {
    display: flex;
    flex-direction: row;
}

.person-picture {
    width: 80px;
    height: 100px;
    align-self: center;
    margin-left: 20px;
}

.person-card {
    display: grid;
    grid-template-columns: 60% 40%;
    background-color: rgb(241, 241, 241);
    justify-content: space-between;
    color: gray;
    font-weight: bold;
}

.right-side {
    padding: 20px;
}

.name {
    font-size: 28px;
}

.attributes-name {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
}
</style>