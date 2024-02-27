<script setup>
import CustomInput from '@/components/CustomInput.vue';
import { ref } from 'vue';

const defaultPictureLink = "//storage.needpix.com/rsynced_images/blank-profile-picture-973460_1280.png";

const personName = '';

const newPersons = ref([
    {
        pictureLink: '',
        name: 'wawa',
        height: '',
        weight: '',
        events: '',
        year: '',
        city: '',
        state: '',
        highschool: ''
    }
]);

function addEmptyPerson() {
    newPersons.value.push({
        pictureLink: '',
        name: '',
        height: '',
        weight: '',
        events: '',
        year: '',
        city: '',
        state: '',
        highschool: ''
    });
}

function deletePerson(index) {
    newPersons.value.splice(index, 1);
}

function print() {
    console.log(personName);
}
</script>

<template>
    <div class="page-container">
        <div class="person-card" v-for="(person, index) in newPersons" :key="index">
            <CustomInput :id="'pictureLink'" :text="'Link para a foto'" />
            <div class="person-info">
                <div class="picture-container">
                    {{ index + 1 }}
                    <img class="person-picture" :src="`${defaultPictureLink}`" />
                </div>
                <div class="attributes-container">
                    <CustomInput :id="'name'" :text="'Nome'" v-model="personName" @click="print"/>
                    <CustomInput :id="'personsHeight'" :text="'Altura'" />
                    <CustomInput :id="'personsWeight'" :text="'Peso'" />
                    <CustomInput :id="'personsEvents'" :text="'Provas'" />
                </div>
                <div class="info-container">
                    <CustomInput id="'personsYear'" :text="'Ano'" />
                    <CustomInput id="'personsCity'" :text="'Cidade'" />
                    <CustomInput id="'personsState'" :text="'Estado'" />
                    <CustomInput id="'personsHighschool'" :text="'Ensino'" />
                </div>
            </div>
            <div class="delete-button-container">
                <button @click="deletePerson(index)">X</button>
            </div>
        </div>
        NOME :: <input v-model="newPersons[0].name" @click="print()"/>
        <div class="button-container">
            <button class="button action" @click="addEmptyPerson()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="plus-sign">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0
                    17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<style scoped>
.delete-button-container {
    position: absolute;
    right: 8%;
}

.button {
    width: 8vw;
    height: 4vh;
}

.button-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.plus-sign {
    width: 80%;
    height:50%;
}

.person-card {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    background: #f3f2f2;
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
    align-items: center;
    justify-content: center;
}

.person-info {
    display: grid;
    grid-template-columns: 15% 43% 42%;
}

.person-picture {
    width: 80px;
    height: 100px;
    align-self: center;
    cursor: pointer;
}
</style>